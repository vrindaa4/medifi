const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    languages: {
      type: String,
      default: "English",
    },
    availability: {
      type: String,
      default: "Mon-Fri, 9AM-5PM",
    },
    location: {
      type: String,
      default: "Medical Center",
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;
