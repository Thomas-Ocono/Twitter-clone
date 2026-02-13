import express from "express";
import {
  getPost,
  createPost,
  deletePost,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPost);

router.post("/", createPost);

router.delete("/", deletePost);

router.put("/", updatePost);

export default router;
