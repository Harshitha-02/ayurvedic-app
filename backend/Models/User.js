const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: "string",
    maxLength: 50,
    description: "User's first name",
  },
  last_name: {
    type: "string",
    maxLength: 50,
    description: "User's last name",
  },
  email: {
    type: "string",
    format: "email",
    description: "User's email address",
  },
  phone_number: {
    type: "string",
    pattern: "^[0-9]{10}$",
    description: "User's phone number (10 digits)",
  },
  dob: {
    type: "string",
    format: "date",
    description: "Date of birth in DD/MM/YYYY format",
  },
  age: {
    type: "integer",
    minimum: 0,
    description: "User's age in years",
  },
  experience_years: {
    type: "integer",
    minimum: 0,
    description: "Years of professional experience",
  },
  degree_certificate: {
    type: "string",
    format: "binary",
    description:
      "Upload Ayurvedic Degree Certificate in PNG/JPG format, max 5MB",
  },
  gender: {
    type: "string",
    enum: ["Male", "Female"],
    description: "User's gender",
  },
  zip_code: {
    type: "string",
    pattern: "^[0-9]{6}$",
    description: "Location zip code (6 digits)",
  },
  education: {
    type: "string",
    description: "User's education background (e.g., Ayurvedic College)",
  },
  designation: {
    type: "string",
    description: "User's professional designation (e.g., Vaidya)",
  },
  price: {
    type: "integer",
    minimum: 0,
    description: "Consultation price",
  },
  password: {
    type: "string",
    format: "password",
    minLength: 8,
    description: "Password for account creation",
  },
  confirm_password: {
    type: "string",
    format: "password",
    minLength: 8,
    description: "Confirmation of the entered password",
  },
});

const UserModel = mongoose.model("users", UserSchema);
model.exports = UserModel;
