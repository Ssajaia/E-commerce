const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary with credentials from .env
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Set up storage engine for multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'products',              // Folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed file types
  },
});

const upload = multer({ storage });

module.exports = upload;
