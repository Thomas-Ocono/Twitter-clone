import express from "express";
import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const username = req.body.username;
    const passwordIn = req.body.password;

    const salt = await bcrypt.genSalt();
    console.log(salt);
    const hashedPassword = await bcrypt.hash(passwordIn, salt);

    const newUser = new User({ username: username, password: hashedPassword });
    await newUser.save();
    console.log("User created");
    res.send({ message: "User successfully created!" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.send({ message: "User not found" });
      return;
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(user.username, process.env.JWT_SECRET);
      res.cookie("token", accessToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
      });
      res.send({ message: "Success!" });
    } else {
      res.send({ message: "Not authorized" });
    }
  } catch (error) {
    console.log(error);
    console.log("error logging in user");
    res.send({ message: "Error logging in user" });
  }
};

export const checkToken = (req, res) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    res.status(401).json({ message: "No Cookie" });
    return;
  }
  console.log("Trying");
  try {
    const checkCookie = jwt.verify(token, process.env.JWT_SECRET);
    console.log(checkCookie);
    res.json({ message: "Cookie Verified :D" });
  } catch (error) {
    return res.status(401).json({ message: "invalid Cookie" });
  }
};
