// middleware/auth.js
const jwt = require('jsonwebtoken');
const Doctor = require('../models/Doctor');
const Retailer = require('../models/Retailer');
const Patient = require('../models/Patient');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user = await Doctor.findById(decoded.id);
    if (user) user.role = 'doctor';

    if (!user) {
      user = await Retailer.findById(decoded.id);
      if (user) user.role = 'retailer';
    }

    if (!user) {
      user = await Patient.findById(decoded.id);
      if (user) user.role = 'patient';
    }

    if (!user) {
      throw new Error('No user found');
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

module.exports = auth;
