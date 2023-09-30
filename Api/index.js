import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is up and running: ", process.env.PORT);
});

app.get("/", (req, res) => {
  res.send("")
});

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
