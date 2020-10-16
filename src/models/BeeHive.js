// External Dependencies
const mongoose = require("mongoose");

const beeHiveSchema = new mongoose.Schema(
  {
    number: Number,
    name: String,
    buildType: String,
    queen: Array,
    sections: Array,
    hiveLog: Array,
    todos: Array,
    comment: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BeeHive", beeHiveSchema);
