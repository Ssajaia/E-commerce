const mongoose = require('mongoose');
/*
this file is Product schema
*/
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  stock: { type: Number, default: 0 },
}, {
  timestamps: true,
  collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
