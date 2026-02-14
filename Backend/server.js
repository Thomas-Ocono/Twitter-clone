import express from "express";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database!");
  } catch (err) {
    console.log(err);
    console.log("Error Connecting to Database");
    process.exit(1);
  }
};
connectDB();
console.log(process.env.PORT);

app.use(express.json());
app.use(cors());

app.use("/api/post", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(5001, () => {
  console.log("Listening on port 5001");
});
