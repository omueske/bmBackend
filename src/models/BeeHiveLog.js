// External Dependencies
const mongoose = require('mongoose')

const beeHiveLogSchema = new mongoose.Schema(
  {
    beeHiveId: String,
    findings: Object,
    frames: Object,
    food: Object,
    date: Date,
    meekness: Number,
    steadily: Number,
    annotations: String,
    meteorology: Object
  },
  { timestamps: true }
)

module.exports = mongoose.model('BeeHiveLog', beeHiveLogSchema)
