import express from "express";
import { tokenAuth } from "../middleware.js";
import {
  createPost,
  getPostsByUsername,
} from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", tokenAuth, createPost);

router.get("/", tokenAuth, getPostsByUsername);

export default router;
