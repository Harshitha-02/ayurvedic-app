const jwt = require('jsonwebtoken');
const Retailer = require('../models/Retailer');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const retailer = await Retailer.findById(decoded.id);

    if (!retailer) {
      throw new Error('No user found');
    }

    req.user = retailer;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

module.exports = auth;
