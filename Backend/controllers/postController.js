import express from "express";
import Post from "../models/Post.js";

export const getPost = async (req, res) => {
  const allPosts = await Post.find();
  res.status(200).json(allPosts);
};

export const createPost = async (req, res) => {
  try {
    const { username, postText } = req.body;
    const newPost = new Post({ username: username, postText: postText });
    await newPost.save();
    res.status(201).json({ message: "Post created" });
  } catch (err) {
    console.log(err);
    console.log("Error creating post");
    res.status(501).json({ message: "Error creating post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const deletePost = await Post.findByIdAndDelete(req.body.postID);
    if (!deletePost) {
      return res.status(503).json({ message: "Could not find post" });
    }
    res.status(201).json({ message: "Post deleted successfully!" });
  } catch (err) {
    console.log(err);
    console.log("Error deleting note");
    res.status(502).json({ message: "Error deleting post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { postID, username, postText } = req.body;
    const updatedNote = await Post.findByIdAndUpdate(postID, {
      username,
      postText,
    });
    if (!updatedNote) {
      return res.status(505).json({ message: "Could not find post" });
    }
    res.status(200).json({ message: "Post succesfully updated!" });
  } catch (err) {
    console.log(err);
    console.log("Error updating post");
    res.status(504).json({ message: "Error updating post" });
  }
};
