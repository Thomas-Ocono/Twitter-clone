import express from "express";
import Users from "../models/Users.js";
import jwt from "jsonwebtoken";

import { registerUser, loginUser } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/login", loginUser);

export default router;
