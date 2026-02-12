import express from "express";
import { tokenAuth } from "../middleware.js";
import {
  createPost,
  getPostsByUsername,
  getAllPosts,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", tokenAuth, createPost);

router.get("/", getAllPosts);

router.get("/search", tokenAuth, getPostsByUsername);

export default router;
