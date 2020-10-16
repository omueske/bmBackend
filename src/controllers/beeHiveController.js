// External Dependencies
const boom = require("boom");

// Get Data Models
const BeeHive = require("../models/BeeHive");

// Get all BeeHives
exports.getBeeHives = async (req, reply) => {
  try {
    const beeHives = await BeeHive.find();
    return beeHives;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get Single BeeHive by ID
exports.getSingleBeeHive = async (req, reply) => {
  try {
    const id = req.params.id;
    const beeHive = await BeeHive.findById(id);
    return beeHive;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new BeeHive
exports.addBeeHive = async (req, reply) => {
  try {
    const beeHive = new BeeHive(req.body);
    return beeHive.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing BeeHive
exports.updateBeeHive = async (req, reply) => {
  try {
    const id = req.params.id;
    const beeHive = req.body;
    const { ...updateData } = beeHive;
    const update = await BeeHive.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete an BeeHive
exports.deleteBeeHive = async (req, reply) => {
  try {
    const id = req.params.id;
    const beeHive = await BeeHive.findByIdAndRemove(id);
    return beeHive;
  } catch (err) {
    throw boom.boomify(err);
  }
};
