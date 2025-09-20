// server.js
require('dotenv').config(); // load .env variables
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());          // enable CORS for all requests
app.use(express.json());  // parse JSON body

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('E-commerce API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
