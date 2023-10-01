import express from "express";
import mongoose from "mongoose";

const router = express.userRouter();

router.use("/test", (req, res) => {
  res.json({
    message: "hello world",
  });
});

export default router;
