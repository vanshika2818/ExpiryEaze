import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  expiryDate: Date,
});

export default mongoose.model("Product", productSchema);
