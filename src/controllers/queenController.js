const log = require('pino')({ level: 'debug' })
// External Dependencies
const boom = require('boom')

// Get Data Models
const Queen = require('../models/Queen')

// Get all Queens
exports.getQueens = async (req, reply) => {
  try {
    const queens = await Queen.find()
    log.debug(queens)
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
    log.debug(queen)
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
    log.debug(req.body)
    const { ...updateData } = queen
    const update = await Queen.findByIdAndUpdate(id, updateData, {
      new: true
    })
    log.debug(update)
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete an Queen
exports.deleteQueen = async (req, reply) => {
  try {
    const id = req.params.id
    let queen = await Queen.findByIdAndRemove(id)
    log.debug(queen)
    return queen
  } catch (err) {
    throw boom.boomify(err)
  }
}
