const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doc",
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    appoinmentFor: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appoinment", appoinmentSchema);
