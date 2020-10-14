// External Dependencies
const boom = require("boom");

// Get Data Models
const Location = require("../models/Location");

// Get all Locations
exports.getLocations = async (req, reply) => {
  try {
    const locations = await Location.find();
    return locations;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Single Location by ID
exports.getSingleLocation = async (req, reply) => {
  try {
    const id = req.params.id;
    const location = await Location.findById(id);
    return location;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new Location
exports.addLocation = async (req, reply) => {
  try {
    const location = new Location(req.body);
    return location.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing Location
exports.updateLocation = async (req, reply) => {
  try {
    const id = req.params.id;
    const location = req.body;
    const { ...updateData } = location;
    const update = await Location.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete an Location
exports.deleteLocation = async (req, reply) => {
  try {
    const id = req.params.id;
    const location = await Location.findByIdAndRemove(id);
    return location;
  } catch (err) {
    throw boom.boomify(err);
  }
};
