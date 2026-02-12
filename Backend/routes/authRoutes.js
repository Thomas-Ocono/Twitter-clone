import express from "express";
import Users from "../models/Users.js";
import jwt from "jsonwebtoken";

import {
  registerUser,
  loginUser,
  checkToken,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);

router.get("/login", loginUser);

router.get("/checkToken", checkToken);

export default router;
