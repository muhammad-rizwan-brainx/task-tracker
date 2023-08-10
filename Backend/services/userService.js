const mongoose = require("mongoose");
const User = require("../models/userModel");
const hashPassword = require("../utils/hashPassword");

const checkExistingUser = async (email) => {
  return await User.findOne({ email });
};

const createUser = async (userData) => {
  const { userName, email, password } = userData;


  const user = new User({
    userName,
    email,
    password: password,
  });

  return await user.save();
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email }).exec();
};

const updatePassword = async (user, newPassword) => {
  user.password = newPassword;
  user.resetToken = null;

  return await user.save();
};

const findUserByResetToken = async (resetPasswordToken) => {
  return await User.findOne({ resetPasswordToken });
};

const updateResetToken = async (user, resetToken, expiration) => {
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = expiration;

  return await user.save();
};

module.exports = {
  updateResetToken,
  checkExistingUser,
  findUserByResetToken,
  updatePassword,
  findUserByEmail,
  createUser,
};
