import express from "express";
import Users from "../models/Users.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("yeet");
  res.json({ message: "Yeet" });
});

export default router;
