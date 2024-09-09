const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// JWT secret key (you should keep this in an environment variable)
const JWT_SECRET = "your_jwt_secret_key"; // Replace with your secret key

// User registration route
router.post(
  "/createuser",
  [
    body("name", "Invalid name").isLength({ min: 5 }),
    body("password", "Invalid password").isLength({ min: 5 }),
    body("email", "Invalid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      const newUser = new User({
        name: req.body.name,
        password: securePassword,
        location: req.body.location,
        email: req.body.email,
      });
      await newUser.save(); // Use the User model's save() method
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

// User login route
router.post("/login", async (req, res) => {
  try {
    const loginUser = await User.findOne({ email: req.body.email });
    if (!loginUser) {
      return res
        .status(400)
        .json({ errors: "Login with valid email and password" });
    }

    const matchedCred = await bcrypt.compare(req.body.password, loginUser.password);
    if (!matchedCred) {
      return res
        .status(400)
        .json({ errors: "Login with valid email and password" });
    }

    // Generate JWT
    const payload = {
      user: {
        id: loginUser.id,
      },
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
