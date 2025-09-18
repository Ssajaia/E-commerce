const mongoose = require('mongoose');
/*
this file is User schema,
*/
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },//this might be unique or not
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
}, {
  timestamps: true,// this should be useful later
  collection: 'users'//TODO: might have to be replaced
});

module.exports = mongoose.model('User', userSchema);
