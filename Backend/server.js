const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/User');

// Initialize
dotenv.config();
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- ROUTES ---

// 1. Test Route
app.get('/', (req, res) => res.send('ECP API is running...'));

// 2. Registration Route (This is what the frontend will call)
app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    // Check if it's a duplicate email error
    if (err.code === 11000) {
      return res.status(400).json({ message: "This email is already registered!" });
    }
    res.status(400).json({ message: err.message });
  }
});

// 3. Admin Get Users Route
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ registrationDate: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
// DELETE a user
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;