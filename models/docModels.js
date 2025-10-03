const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  isDoc: {
    type: Boolean,
    required: false,
  },
  designation: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = mongoose.model("doc", docSchema);
