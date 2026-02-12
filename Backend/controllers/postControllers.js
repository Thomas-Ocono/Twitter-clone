import express from "express";

export const createPost = async (req, res) => {
  try {
    res.json(req.username);
  } catch (err) {
    console.log(err);
    console.log("Error creating post");
    res.json({ message: "Error creating post" });
  }
};
