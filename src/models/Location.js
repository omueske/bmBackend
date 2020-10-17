// External Dependencies
const mongoose = require("mongoose");
const hiveLinkSchema = new mongoose.Schema(
  { href: String, beeHiveID: String },
  { timestamps: true }
);
const locationSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    longitude: String,
    latitude: String,
    hives: [hiveLinkSchema],
    comment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
