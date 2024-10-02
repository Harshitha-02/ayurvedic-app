const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number, required: true },
  experience: { type: Number, required: true },
  gender: { type: String, required: true },
  zipCode: { type: String, required: true },
  education: { type: String, required: true },
  designation: { type: String, required: true },
  price: { type: Number, required: true },
  password: { type: String, required: true },
  certificate: { type: String, required: true },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
