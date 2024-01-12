// controllers/propertyController.js

const PropertyListing = require('../models/PropertyListing');

exports.createPropertyListing = async (req, res) => {
  try {
    const propertyData = req.body;
    const newPropertyListing = new PropertyListing(propertyData);
    await newPropertyListing.save();
    res.status(201).json({ message: 'Property listing created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the property listing' });
  }
};
