// External Dependencies
const boom = require('boom')

// Get Data Models
const BeeHive = require('../models/BeeHive')
const BeeHiveLog = require('../models/BeeHiveLog')

// Get all BeeHives
exports.getBeeHives = async (req, reply) => {
  try {
    const beeHives = await BeeHive.find()
    return beeHives
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get Single BeeHive by ID
exports.getSingleBeeHive = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHive = await BeeHive.findById(id)
    return beeHive
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new BeeHive
exports.addBeeHive = async (req, reply) => {
  try {
    const beeHive = new BeeHive(req.body)
    reply.status(201)
    return beeHive.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing BeeHive
exports.updateBeeHive = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHive = req.body
    const { ...updateData } = beeHive
    const update = await BeeHive.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete an BeeHive
exports.deleteBeeHive = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHive = await BeeHive.findByIdAndRemove(id)
    return beeHive
  } catch (err) {
    throw boom.boomify(err)
  }
}

// ================================================
// Hivelogs
// ================================================
// Get all logs in Database
exports.getAllBeeHiveLogs = async (req, reply) => {
  try {
    const beeHiveLogs = await BeeHiveLog.find()
    return beeHiveLogs
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get all logs from an specific Hive
exports.getBeeHiveLogs = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHiveLogs = await BeeHiveLog.find({ beeHiveId: id })
    return beeHiveLogs
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get an specific Hivelog
exports.getSingleBeeHiveLog = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHiveLogs = await BeeHiveLog.findById(id)
    return beeHiveLogs
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new BeeHiveLog
exports.addBeeHiveLog = async (req, reply) => {
  try {
    req.body.hiveId = req.params.id
    const beeHiveLog = new BeeHiveLog(req.body)
    reply.status(201)
    return beeHiveLog.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete an BeeHive-Log
exports.deleteBeeHiveLog = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHiveLog = await BeeHiveLog.findByIdAndRemove(id)
    return beeHiveLog
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an BeeHiveLog
exports.updateBeeHiveLog = async (req, reply) => {
  try {
    const id = req.params.id
    const beeHiveLog = req.body
    const { ...updateData } = beeHiveLog
    const update = await BeeHiveLog.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
