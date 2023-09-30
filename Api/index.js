import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();


app.get("/", (req, res) => {
  res.send("")
});

mongoose
.connect(process.env.MONGO_DB)
.then(() => {
  // console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log("Server and database is up and running: ", process.env.PORT);
  });
  })
  .catch((err) => {
    console.log(err);
  });
