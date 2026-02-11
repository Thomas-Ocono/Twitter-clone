import express from "express";
import User from "../models/Users.js";
import bcrypt from "bcrypt";

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
