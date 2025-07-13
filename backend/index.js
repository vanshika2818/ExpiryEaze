import express from "express";
import cors from "cors"; // ✅ import cors
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors()); // ✅ Use CORS before routes
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
});
