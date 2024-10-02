const mongoose = require('mongoose');

const RetailerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  licenseNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  zipCode: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Retailer', RetailerSchema);
