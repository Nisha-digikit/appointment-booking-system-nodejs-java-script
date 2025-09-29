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
    required: true,
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
    required: true,
    default: "",
  },
});

module.exports = mongoose.model("doc", docSchema);
