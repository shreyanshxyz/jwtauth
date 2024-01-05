import mongoose from "mongoose";

export default function dbConnect() {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(console.log("Connected to the database"));
  } catch (err) {
    console.log(err);
  }
}
