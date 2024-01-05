import express from "express";
import dotenv from "dotenv";
dotenv.config();
import dbConnect from "./util/dbConnect.js";
import authRoute from "./routes/authRoute.js";

const app = express();

dbConnect();
const PORT = 5000 || process.env.PORT;
app.use(express.json());

app.use("/", (req, res) => {
  res.send("<h1>App is running successfully</h1>");
});
app.use("/", authRoute);

app.listen(PORT, function () {
  console.log(`App is running on the Port: ${PORT}`);
});
