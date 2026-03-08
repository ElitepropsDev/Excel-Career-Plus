const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Added unique: true
  phone: { type: String, required: true },
  course: { type: String, default: "Web Business Roadmap" },
  couponCode: { type: String },
  referral: { type: String },
  registrationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);