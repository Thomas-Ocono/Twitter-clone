import express from "express";
import {
  getPost,
  createPost,
  deletePost,
  updatePost,
  getPostsByUser,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPost);

router.post("/", createPost);

router.delete("/", deletePost);

router.put("/", updatePost);

router.get("/user", getPostsByUser);

export default router;
