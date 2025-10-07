const mongoose = require("mongoose");

const deptSchema = new mongoose.Schema({
  dept: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dept", deptSchema);
