// routes/bookingRoutes.js

const express = require("express");
const router = express.Router();
const { createBooking, getAllBookings } = require("../controllers/bookingController");

// POST route to book an appointment
router.post("/", createBooking);

// Route to fetch all bookings
router.get("/bookings", getAllBookings);

module.exports = router;
