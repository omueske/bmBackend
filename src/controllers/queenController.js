const log = require('pino')({ level: 'debug' })
// External Dependencies
const boom = require('boom')

// Get Data Models
const Queen = require('../models/Queen')

// Get all Queens
exports.getQueens = async (req, reply) => {
  try {
    const queens = await Queen.find()
    return queens
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get Single Queen by ID
exports.getSingleQueen = async (req, reply) => {
  try {
    const id = req.params.id
    const queen = await Queen.findById(id)
    return queen
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Queen
exports.addQueen = async (req, reply) => {
  try {
    const queen = new Queen(req.body)
    log.debug(req.body)
    reply.status(201)
    return queen.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Queen
exports.updateQueen = async (req, reply) => {
  try {
    const id = req.params.id
    const queen = req.body
    const { ...updateData } = queen
    const update = await Queen.findByIdAndUpdate(id, updateData, {
      new: true
    })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete an LocatQueenion
exports.deleteQueen = async (req, reply) => {
  try {
    const id = req.params.id
    let location = await Queen.findByIdAndRemove(id)
    return location
  } catch (err) {
    throw boom.boomify(err)
  }
}
