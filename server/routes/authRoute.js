import express from "express";
import { signUp, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/api/singup", signUp);
router.post("/api/login`", login);

export default router;
