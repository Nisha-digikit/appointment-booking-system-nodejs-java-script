const mongoose = require("mongoose");

const appoinmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doc",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    appointmentFor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Scheduled",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appoinment", appoinmentSchema);
