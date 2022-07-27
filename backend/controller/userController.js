const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const user = require("../models/userModel");
// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find is user already exists
  const userExists = await user.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already registered");
  }

  res.send("Register Route");
});

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};
