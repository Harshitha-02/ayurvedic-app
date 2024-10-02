const express = require('express');
const router = express.Router();
const multer = require('multer');
const { registerDoctor, registerRetailer, registerPatient, loginUser } = require('../controllers/authController');
const cors = require('cors');
app.use(cors());
// Multer setup for file uploads (e.g., certificates)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Doctor, Retailer, Patient registration
router.post('/register/doctor', upload.single('certificate'), registerDoctor);
router.post('/register/retailer', registerRetailer);
router.post('/register/patient', registerPatient);

// Common login route
router.post('/login', loginUser);

module.exports = router;
