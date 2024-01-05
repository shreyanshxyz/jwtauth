import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./db/dbConnect.js";

const app = express();

dbConnect();
const PORT = 5000 || process.env.PORT;
app.use(express.json());

app.listen(PORT, function () {
  console.log(`App is running on the Port: ${PORT}`);
});
