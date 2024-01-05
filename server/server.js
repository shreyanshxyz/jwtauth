import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./util/dbConnect.js";

const app = express();

dbConnect();
const PORT = 5000 || process.env.PORT;
app.use(express.json());

app.use("/", (req, res) => {
  res.send("<h1>App is running successfully</h1>");
});

app.listen(PORT, function () {
  console.log(`App is running on the Port: ${PORT}`);
});
