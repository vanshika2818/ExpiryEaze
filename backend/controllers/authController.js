// controllers/auth.js
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    console.log("Registering:", { name, email, role });

    // Find users with same email
    const sameEmailUsers = await User.find({ email });
    for (let user of sameEmailUsers) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        console.log("Duplicate password found!");
        return res.status(400).json({
          msg: "Password already in use. Please choose a different one.",
        });
      }
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash, role });

    console.log("User created:", newUser);
    res.status(201).json({ msg: "User registered", user: newUser });

  } catch (err) {
    console.error("❌ Signup Error:", err.message); // Show error message
    res.status(500).json({ msg: "Something went wrong!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Step 1: Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Step 2: Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid password" });
    }

    // Step 3: Send user info (excluding password)
    res.status(200).json({
      msg: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};

