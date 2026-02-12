import express from "express";
import { tokenAuth } from "../middleware.js";
import { createPost } from "../controllers/postControllers.js";

const router = express.Router();

router.post("/", tokenAuth, createPost);

export default router;
