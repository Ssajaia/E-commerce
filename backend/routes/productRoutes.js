const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const upload = require('../middleware/upload'); // Cloudinary upload
const auth = require('../middleware/auth');     // JWT auth (optional for adding products)

// @route   POST /api/products
// @desc    Add a new product
// @access  Private (admin)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const imageUrl = req.file.path; // Cloudinary URL

    const product = await Product.create({ name, description, price, stock, imageUrl });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/products/:id
// @desc    Get single product by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
