const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Importing User model from Server/models/User.js
const User = require("../../models/User");
const express = require("express");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        success: false,
        message:
          "User already exists with the same email!! Please try again with some other email.",
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//login

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "User not found with the given email!! Please register first.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordMatch) {
      return res.json({
        success: false,
        message:
          "Invalid password!! Please try again with correct credentials.",
      });
    }

    const token = jwt.sign(
      { email: checkUser.email, id: checkUser._id, role: checkUser.role },
      "CLIENT_SECRET_KEY",
      { expiresIn: "1h" }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
      })
      .json({
        success: true,
        message: "User logged in successfully",
        user: {
          email: checkUser.email,
          role: checkUser.role,
          id: checkUser._id,
        },
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

//logout

const logoutUser = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully",
  });
};

//auth middleware

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ success: false, message: "Unauthorised access!" });
  }
  try{
    const decodedData = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decodedData;
    next();
  }catch(err){
    console.log(err);
    return res.status(401).json({ success: false, message: "Unauthorised access!" });
  }
};

module.exports = { registerUser, loginUser, logoutUser, authMiddleware };
