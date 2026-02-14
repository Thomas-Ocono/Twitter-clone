import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username: username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(406).json({ message: "Username already taken" });
    }
    console.log(err);
    console.log("Error creating user");
    res.status(506).json({ message: "Error creating user" });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const name = req.body.username;
    const foundUser = await User.find({ username: name });
    console.log(foundUser[0]._id);
    if (foundUser.length === 0) {
      return res.status(500).json({ message: "User not found" });
    }
    await User.findByIdAndDelete(foundUser[0]._id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    console.log("Error deleting user");
    res.status(500).json({ message: "Error deleting user" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    console.log(err);
    console.log("Error getting all users");
    res.status(500).json({ message: "Error getting all users" });
  }
};
