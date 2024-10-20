const Doctor = require('../models/Doctor');
const Retailer = require('../models/Retailer');
const Patient = require('../models/Patient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register Doctor
exports.registerDoctor = async (req, res) => {
  const { firstName, lastName, email, phone, dob, age, experience, gender, zipCode, education, designation, price, password } = req.body;
  const certificate = req.file.path;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doctor({ firstName, lastName, email, phone, dob, age, experience, gender, zipCode, education, designation, price, password: hashedPassword, certificate });
    await doctor.save();
    const token = generateToken(doctor);
    res.status(201).json({ message: 'Doctor registered successfully', token ,user: {
      id: doctor._id,
      firstName: doctor.firstName,
      lastName: doctor.lastName,
      role: 'doctor',
    },});
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Register Retailer
exports.registerRetailer = async (req, res) => {
  const { firstName, lastName, email, phone, dob, licenseNumber, age, gender, zipCode, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const retailer = new Retailer({ firstName, lastName, email, phone, dob, licenseNumber, age, gender, zipCode, password: hashedPassword });
    await retailer.save();
    const token = generateToken(retailer);
    res.status(201).json({ message: 'Retailer registered successfully', token ,user: {
      id: retailer._id,
      firstName: retailer.firstName,
      lastName: retailer.lastName,
      role: 'doctor',
    },});
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Register Patient
exports.registerPatient = async (req, res) => {
  const { firstName, lastName, email, phone, dob, age, gender, zipCode, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const patient = new Patient({ firstName, lastName, email, phone, dob, age, gender, zipCode, password: hashedPassword });
    await patient.save();
    const token = generateToken(patient);
    res.status(201).json({ message: 'Patient registered successfully', token ,user: {
      id: patient._id,
      firstName: patient.firstName,
      lastName: patient.lastName,
      role: 'patient',
    },});
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login User
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
      console.log("mismatched");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.status(200).json({ message: 'Login successful', token, user: {id: user._id, firstName: user.firstName, lastName: user.lastName, role,},});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Login failed' });
  }
};