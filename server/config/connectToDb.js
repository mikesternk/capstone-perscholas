import mongoose from "mongoose";
import "dotenv/config";

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
  }
}

export default connectToDb;
