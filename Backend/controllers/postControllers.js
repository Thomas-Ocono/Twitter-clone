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

export const getPostsByUsername = async (req, res) => {
  try {
    const username = req.query.q;
    const foundPosts = await Post.find({ author: username });
    if (foundPosts.length === 0) {
      res.json({ message: "No posts found" });
    } else {
      res.json(foundPosts);
    }
  } catch (error) {
    console.log(error);
    console.log("Error getting posts by username");
    res.json({ message: "Error finding posts by username" });
  }
};
