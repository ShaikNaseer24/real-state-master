const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/propertydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'));
  }
};

const upload = multer({ storage: storage, 
  fileFilter: fileFilter, 
  limits:{fileSize: 100000000
  },files:10 
});

const propertySchema = new mongoose.Schema({
  intent: String,
  property_type: String,
  available_from: String,
  price: String,
  is_negotiable: Boolean, 
  include_registration: Boolean,
  description: String,
  furnished: String,
  bathroom: String,
  balconies: String,
  direction: String,
  parking: String,
  user_type: String,
  name: String,
  email: String,
  mobile: String,
  images: [String],
});

const Property = mongoose.model('Property', propertySchema);

app.post('/properties', upload.array('images', 10), async (req, res) => {
  const propertyData = req.body;
  const imageUrls = req.files.map((file) => file.filename);

  try {
    const newProperty = new Property({ ...propertyData, images: imageUrls });

    await newProperty.save();

    res.status(200).json({ message: 'Property created successfully.' });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
