import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

async function signUp(req, res) {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json(
        `User successfully saved. username: ${username} password: ${hashedPassword}`
      );
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, message: "Login successful!" });
  } catch (err) {
    console.log(err);
  }
}

async function editUser(req, res) {
  try {
    const { userId } = req.user;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's username
    user.username = req.body.newUsername;
    await user.save();

    res.json({ message: "Username updated successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function deleteUser(req, res) {
  try {
    // Access the decoded user information from the token
    const { userId } = req.user;

    // Find and delete the user by ID
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { signUp, login, editUser, deleteUser };
