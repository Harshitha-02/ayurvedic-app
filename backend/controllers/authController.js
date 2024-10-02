const Doctor = require('../models/Doctor');
const Retailer = require('../models/Retailer');
const Patient = require('../models/Patient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
app.use(cors());
// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, 'your_jwt_secret_key', { expiresIn: '1d' });
};

// Doctor registration
exports.registerDoctor = async (req, res) => {
  const { firstName, lastName, email, phone, dob, age, experience, gender, zipCode, education, designation, price, password } = req.body;
  const certificate = req.file.path;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doctor({ firstName, lastName, email, phone, dob, age, experience, gender, zipCode, education, designation, price, password: hashedPassword, certificate });
    await doctor.save();
    const token = generateToken(doctor);
    res.status(201).json({ message: 'Doctor registered successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Retailer registration
exports.registerRetailer = async (req, res) => {
  console.log("This function called sucessfully");
  const { firstName, lastName, email, phone, dob, licenseNumber, age, gender, zipCode, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const retailer = new Retailer({ firstName, lastName, email, phone, dob, licenseNumber, age, gender, zipCode, password: hashedPassword });
    await retailer.save();
    const token = generateToken(retailer);
    res.status(201).json({ message: 'Retailer registered successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Patient registration
exports.registerPatient = async (req, res) => {
  const { firstName, lastName, email, phone, dob, age, gender, zipCode, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const patient = new Patient({ firstName, lastName, email, phone, dob, age, gender, zipCode, password: hashedPassword });
    await patient.save();
    const token = generateToken(patient);
    res.status(201).json({ message: 'Patient registered successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Sign in logic (common for all users)
exports.loginUser = async (req, res) => {
  const { email, password, role } = req.body;
  let user;

  try {
    if (role === 'doctor') {
      user = await Doctor.findOne({ email });
    } else if (role === 'retailer') {
      user = await Retailer.findOne({ email });
    } else if (role === 'patient') {
      user = await Patient.findOne({ email });
    }

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};
