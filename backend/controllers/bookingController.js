// controllers/bookingController.js

const Booking = require("../models/Booking");

// Controller function to handle booking creation
exports.createBooking = async (req, res) => {
  const { doctorName, timeSlot, email } = req.body; // Destructure the request body

  if (!doctorName) {
    return res.status(400).json({ error: "Doctor name are required" });
  } else if (!timeSlot) {
    return res.status(400).json({ error: "Time slot is required" });
  } else if (!email) {
    return res.status(400).json({ error: "Patient email is required" });
  }

  try {
    // Check if a booking already exists for the doctor and time slot
    const existingBooking = await Booking.findOne({ doctorName, timeSlot });
    if (existingBooking) {
      return res.status(400).json({
        error: "This time slot is already booked for the selected doctor",
      });
    }

    // Create a new booking
    const newBooking = new Booking({
      doctorName,
      timeSlot,
      patientEmail: email,
    });

    // Save the booking to the database
    await newBooking.save();

    return res.status(201).json({
      message: "Appointment booked successfully",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Controller function to get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    // Fetch all bookings from the database
    const bookings = await Booking.find();

    // Check if any bookings exist
    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    // Return all bookings in the response
    return res.status(200).json({
      message: "Bookings retrieved successfully",
      bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
