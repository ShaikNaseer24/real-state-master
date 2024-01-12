const mongoose = require('mongoose');

const propertyListingSchema = new mongoose.Schema({
  intent: { type: String, required: true },
  propertyType: { type: String, required: true },
  availableFrom: { type: Date, required: true },
   price: { type: Number, required: true },
   isNegotiable: { type: Boolean, default: false },
   includeRegistration: { type: Boolean, default: false },
   description: { type: String, required: true },
   furnished: { type: String, required: true },
   bathrooms: { type: Number, required: true },
   balconies: { type: Number },
   direction: { type: String },
   parking: { type: String },
   userType: { type: String, required: true },
   name: { type: String, required: true },
   email: { type: String, required: true },
   mobile: { type: String, required: true },
});

const PropertyListing = mongoose.model('PropertyListing', propertyListingSchema);

module.exports = PropertyListing;
