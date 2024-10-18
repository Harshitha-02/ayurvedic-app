// models/booking.js

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
