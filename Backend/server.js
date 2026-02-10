import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Users from "./models/Users.js";
import registerRoutes from "./routes/registerRoutes.js";

dotenv.config();
const app = express();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
    console.log("Error connecting to DB");
  }
};

connectToDB();

app.use(express.json());
app.use(cors());

app.use("/register", registerRoutes);

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
