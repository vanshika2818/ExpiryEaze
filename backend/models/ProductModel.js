// models/ProductModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  discount: Number,
  expiryDate: String,
  status: String,
  category: String,
  subcategory: String,
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stock: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
