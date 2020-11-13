// External Dependencies
const boom = require('boom')

// Get Data Models
const Configuration = require('../models/Configuration')
console.log(Configuration.collection)

// Get all Configurations
exports.getConfigurations = async (req, reply) => {
  try {
    const configurations = await Configuration.find()
    return configurations
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get Single Configuration by ID
exports.getSingleConfiguration = async (req, reply) => {
  try {
    const id = req.params.id
    const configuration = await Configuration.findById(id)
    return configuration
  } catch (err) {
    throw boom.boomify(err)
  }
}
