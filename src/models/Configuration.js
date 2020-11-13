// External Dependencies
const mongoose = require('mongoose')

const configurationSchema = new mongoose.Schema(
  {
    name: String,
    hives: Object
  },
  { timestamps: true }
)

module.exports = mongoose.model('Configuration', configurationSchema)
