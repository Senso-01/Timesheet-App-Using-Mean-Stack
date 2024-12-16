const User = require('../models/User');
const bcrypt = require('bcrypt');

// Controller for user login
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ name: username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Incorrect password' });
    }

    res.status(200).json({ success: true, role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc Register a new user
// @route POST /api/users
const registerUser = async (req, res) => {
  const { name, email, password, phone, department, role, businessUnit } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
      department,
      role,
      businessUnit,
    });

    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessUnit: user.businessUnit,
    });
  } catch (error) {
    console.error('Register error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// @desc Get all users
// @route GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Get users error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// @desc Update a user
// @route PUT /api/users/:id
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phone, department, role, businessUnit } = req.body;

  try {
    let user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.department = department || user.department;
    user.role = role || user.role;
    user.businessUnit = businessUnit || user.businessUnit;

    await user.save();

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      businessUnit: user.businessUnit,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc Delete a user
// @route DELETE /api/users/:id
const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteOne();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
};
