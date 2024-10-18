const express = require("express");
const router = express.Router();
const { getAllDoctors } = require("../controllers/doctorController");

// Public Routes
router.get("/", getAllDoctors); // Public route to view all Doctors

module.exports = router;
