import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  discount: Number,
  expiryDate: Date,
  status: String, // Active, Low Stock, Expiring
  category: String, // Food, Electronics etc.
  subcategory: String, // Dairy, Medicine etc.
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

export default mongoose.model("Product", productSchema);
