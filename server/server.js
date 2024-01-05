import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./util/dbConnect.js";
import authRoute from "./routes/authRoute.js";

const app = express();
app.use(express.json());

dbConnect();
const PORT = 5000 || process.env.PORT;

app.use("/", authRoute);

app.listen(PORT, function () {
  console.log(`App is running on the Port: ${PORT}`);
});
