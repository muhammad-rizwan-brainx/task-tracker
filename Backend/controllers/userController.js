const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");
const authService = require("../services/authServicce");
const hashPassword = require("../utils/hashPassword");
const dotenv = require("dotenv");
dotenv.config();

const salt = process.env.SALT;

const validateSignup = (req) => {
  const { userName, email, password } = req.body;
  const errors = [];

  if (!userName || userName.trim() === "") {
    errors.push("Username is required");
  }

  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }

  if (!password || password.trim() === "") {
    errors.push("Password is required");
  } else if (password.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }

  return errors;
};

const validateLogin = (req) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }

  if (!password || password.trim() === "") {
    errors.push("Password is required");
  }

  return errors;
};

const validateForgotPassword = (req) => {
  const { email } = req.body;
  const errors = [];

  if (!email || email.trim() === "") {
    errors.push("Email is required");
  } else if (!isValidEmail(email)) {
    errors.push("Email is invalid");
  }

  return errors;
};

exports.signup = async (req, res, next) => {
  try {
    const validationErrors = validateSignup(req);

    if (validationErrors.length > 0) {
      return res.status(422).json({ errors: validationErrors });
    }

    const existingUser = await userService.checkExistingUser(req.body.email);

    if (existingUser) {
      return res.status(422).json({
        Message: "Mail Exists Already",
      });
    }

    await userService.createUser(req.body);

    res.status(201).json({
      Message: "User Created",
    });

  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const validationErrors = validateLogin(req);

    if (validationErrors.length > 0) {
      return res.status(422).json({ errors: validationErrors });
    }

    const email = req.body.email;
    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        Message: "User Doesn't Exist",
      });
    }

    const respons = await bcrypt.compare(req.body.password, user.password);

    if (respons) {
      const token = jwt.sign(
        {
          email: user.email,
          id: user._id,
        },
        salt,
        {
          expiresIn: "1h",
        }
      );

      const tokenCreationResult = await authService.createAuthToken(
        email,
        token
      );

      return res.status(200).json({
        message: "successful",
        token: token,
      });
    }

    res.status(401).json({
      Message: "Auth Fail",
    });
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { resetPasswordToken, newPassword } = req.body;
    const user = await userService.findUserByResetToken(resetPasswordToken);
    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset token",
      });
    }
    await userService.updatePassword(user, password);

    res.status(200).json({ message: "Password changed successfully" });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to process change password request" });
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const validationErrors = validateForgotPassword(req);

    if (validationErrors.length > 0) {
      return res.status(422).json({ errors: validationErrors });
    }
    const { email } = req.body;
    const user = await userService.findUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const resetToken = jwt.sign({ userId: user._id }, salt, {
      expiresIn: "1h",
    });
    
    const expiration = Date.now() + 3600000;
    await userService.updateResetToken(user, resetToken, expiration);
    res.status(200).json({ message: "Password reset link sent successfully" });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to process forgot password request" });
  }
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
