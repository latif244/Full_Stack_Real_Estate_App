import express from "express";
import mongoose from "mongoose";
import { test } from "../controllers/user.controller.js";

const router = express.Router();


router.get("/test", test);

// Routing for signin


export default router;
