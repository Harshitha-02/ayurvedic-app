const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// const { connectDB } = require("./Models/db");

// connectDB();

require("dotenv").config();
const { Medicine } = require("./Models/db");

app.use(cors());
const PORT = process.env.PORT | 8080;

// app.get("/ping", (req, res) => {
//   res.send("PONG");
// });

app.get("/medicines", async (req, res) => {
  try {
    const medicines = await Medicine.find(); // Example of finding all medicines
    console.log(medicines);
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
