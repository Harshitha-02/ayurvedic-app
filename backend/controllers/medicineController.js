const Medicine = require('../models/Medicine');

// Add Medicine (Retailer Only)
exports.addMedicine = async (req, res) => {
  const { name, price, quantity ,category, prescription} = req.body;
  const image = req.file.path;
  const retailerId = req.user._id; // Get retailer ID from authenticated user

  try {
    const newMedicine = new Medicine({ name, price, quantity ,category, prescription, image, retailerId });
    await newMedicine.save();
    res.status(201).json({ message: 'Medicine added successfully', medicine: newMedicine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add medicine', error: error.message });
  }
};

// Get All Medicines (Public)
exports.getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find().populate('retailerId', 'firstName lastName');
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch medicines', error: error.message });
  }
};

// Get Retailer's Medicines (Retailer Only)
exports.getMyMedicines = async (req, res) => {
  const retailerId = req.user._id;

  try {
    const medicines = await Medicine.find({ retailerId });
    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch your medicines', error: error.message });
  }
};

// Delete Medicine (Retailer Only)
exports.deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete medicine', error: error.message });
  }
};
