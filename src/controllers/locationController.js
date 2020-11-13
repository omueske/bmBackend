// External Dependencies
const boom = require('boom')

// Get Data Models
const Location = require('../models/Location')
const BeeHive = require('../models/BeeHive')

// Get all Locations
exports.getLocations = async (req, reply) => {
  try {
    const locations = await Location.find()
    return locations
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get Single Location by ID
exports.getSingleLocation = async (req, reply) => {
  try {
    const id = req.params.id
    const location = await Location.findById(id)
    return location
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Location
exports.addLocation = async (req, reply) => {
  try {
    const location = new Location(req.body)
    reply.status(201)
    return location.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Location
exports.updateLocation = async (req, reply) => {
  try {
    const id = req.params.id
    const location = req.body
    const { ...updateData } = location
    const update = await Location.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete an Location
exports.deleteLocation = async (req, reply) => {
  try {
    const id = req.params.id
    let location = await Location.findById(id)
    for (hive of location.hives) {
      const req = {}
      req.params = {}

      req.params.beeHiveID = hive._id
      req.params.id = location._id
      console.log(req)
      const toDelte = await this.unlinkBeeHiveFromLocation(req, '')
      console.log(toDelte)
    }
    location = await Location.findByIdAndRemove(id)
    return location
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Link Hive to Location
exports.linkBeeHiveToLocation = async (req, reply) => {
  try {
    const id = req.params.id

    updateData = JSON.parse(`{"href": "/api/beeHives/${req.params.beeHiveID}", 
      "beeHiveID": "${req.params.beeHiveID}" }`)

    const update = await Location.updateOne(
      { _id: id },
      { $push: { hives: updateData } },
      { new: true }
    )

    // Get the new saved location-state und return it
    const currentLocation = (hive = Location.findById(id))
    reply.status(201)
    return currentLocation
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.unlinkBeeHiveFromLocation = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHiveID = req.params.beeHiveID
    console.log(req)

    const updateBeeHive = await BeeHive.findByIdAndUpdate(
      { _id: beeHiveID },
      { locationId: null }
    )

    const updateLocation = await Location.findByIdAndUpdate(
      id,
      { $pull: { hives: { beeHiveID: beeHiveID } } },
      { new: true }
    )

    // Get the new saved location-state und return it
    const currentLocation = (hive = Location.findById(id))
    return currentLocation
  } catch (err) {
    throw boom.boomify(err)
  }
}
