import express from "express";
import Post from "../models/Posts.js";

export const createPost = async (req, res) => {
  try {
    const postContent = req.body.postContent;
    const username = req.body.username;

    const newPost = new Post({ postContent: postContent, author: username });
    await newPost.save();
    console.log("Post added!");
  } catch (err) {
    console.log(err);
    console.log("Error creating post");
    res.json({ message: "Error creating post" });
  }
};
