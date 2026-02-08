import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const Schema = mongoose.Schema;

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

const testSchema = new Schema({
  text: {
    type: "String",
    required: true,
  },
});
const testUser = mongoose.model("User", testSchema);

const testData = async () => {
  const newTest = new testUser({
    text: "Hello World",
  });
  try {
    newTest.save();
    console.log("Data saved");
  } catch (error) {
    console.error(error);
    console.log("Error saving");
  }
};

app.listen(5001, () => {
  console.log("Server started on port 5001");
});
