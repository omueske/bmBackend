// External Dependencies
const mongoose = require('mongoose')

const queenSchema = new mongoose.Schema(
  {
    beeHiveID: String,
    number: String,
    hatchYear: Number,
    pedigree: String,
    comment: String,
    status: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Queen', queenSchema)
