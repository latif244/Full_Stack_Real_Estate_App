import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter  from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();




const app = express();

app.use(express.json())



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



  app.use('/Api/user', userRouter);
  app.use('/Api/auth', authRouter);

  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    })

  }) 
  