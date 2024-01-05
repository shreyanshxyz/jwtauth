import express from "express";
import { signUp, login } from "../controllers/authController.js";

const router = express.Router();

router.get("/api/test", function (req, res) {
  res.send("Hello");
});
router.post("/api/signup", signUp);
router.post("/api/login", login);

export default router;
