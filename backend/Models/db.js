const mongoose = require("mongoose");

// const mongo_url =
//   "mongodb+srv://hello:123@cluster0.bex5s.mongodb.net/medicine?retryWrites=true&w=majority&appName=Cluster0";
const mongo_url = process.env.MONGO_CON_Medicine;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error", err.message);
  });

// // MongoDB Connection
// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongo_url).then(() => {
//       console.log("MongoDB Connected...");
//     });
//   } catch (err) {
//     console.error("MongoDB Connection Error:", err.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// Schema for customer reviews
const reviewSchema = new mongoose.Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: false },
});

// Main medicine schema
const medicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  provider: { type: String, required: true },
  rating: { type: Number, required: false, min: 0, max: 5 },
  price: { type: Number, required: true },
  prescriptionRequired: { type: Boolean, required: true },
  description: { type: String, required: true },
  howToUse: { type: String, required: true },
  ingredients: { type: [String], required: true },
  customerReviews: [reviewSchema],
});

const Medicine = mongoose.model("Medicine", medicineSchema);

module.exports = {
  Medicine,
};
