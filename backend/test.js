import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const run = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected successfully to:", conn.connection.host);
    process.exit(0);
  } catch (err) {
    console.error("❌ Error connecting:", err.message);
    process.exit(1);
  }
};

run();
