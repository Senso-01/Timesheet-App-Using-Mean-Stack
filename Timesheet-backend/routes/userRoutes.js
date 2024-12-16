const express = require('express');
const router = express.Router();
const {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');
const User = require('../models/User'); // Your User schema
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Public Routes
//router.post('/login', loginUser);
router.post('/', registerUser);

router.post('/login', loginUser);

// Protected Routes
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
