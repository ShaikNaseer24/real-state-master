
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const cors = require('cors'); 
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to the database
connectDB();
app.use(cors()); 

// Routes
app.use('/properties', propertyRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
