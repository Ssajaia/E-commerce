// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // connect to MongoDB using the URI from .env
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,    // helps handle new MongoDB connection strings
      useUnifiedTopology: true, // handles new server discovery & monitoring engine
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // exit process with failure
  }
};

module.exports = connectDB;
