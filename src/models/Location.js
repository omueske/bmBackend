// External Dependencies
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: String,
  adress: String,
  longitude: String,
  latitutde: String,
  hives: Array,
  comment: String,
});

module.exports = mongoose.model("Location", locationSchema);
