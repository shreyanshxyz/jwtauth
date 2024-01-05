import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import {
  signUp,
  login,
  editUser,
  deleteUser,
} from "../controllers/authController.js";

const router = express.Router();

router.get("/api/test", function (req, res) {
  res.send("Hello");
});
router.post("/api/signup", signUp);
router.post("/api/login", login);
router.post("/api/edit", verifyToken, editUser);
router.post("/api/delete", verifyToken, deleteUser);

export default router;
