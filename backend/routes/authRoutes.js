const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth')
const { registerDoctor, registerRetailer, registerPatient, loginUser } = require('../controllers/authController');

// Multer setup for file uploads
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
router.post('/login', loginUser);
router.get('/user', auth, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Get User Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
