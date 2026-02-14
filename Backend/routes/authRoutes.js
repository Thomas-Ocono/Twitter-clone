import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/", createUser);

router.get("/", getAllUsers);

router.delete("/", deleteUser);

export default router;
