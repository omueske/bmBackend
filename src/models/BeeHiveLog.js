// External Dependencies
const mongoose = require('mongoose')

const beeHiveLogSchema = new mongoose.Schema(
  {
    hiveId: String,
    findings: Object,
    frames: Object,
    food: Object,
    date: Date,
    meekness: Number,
    comment: String,
    meteorology: Object
  },
  { timestamps: true }
)

module.exports = mongoose.model('BeeHiveLog', beeHiveLogSchema)
