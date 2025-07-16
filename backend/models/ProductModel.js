import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  price: Number,
  discountedPrice: Number,     // ✅ Auto-calculated from price and discount
  discount: Number,
  expiryDate: String,
  expiryInDays: Number,        // ✅ Used for badge color (Expires in N days)
  status: String,              // Active, Low Stock, Expiring Today
  category: String,
  subcategory: String,
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stock: Number,

  // ✅ Additional frontend display info
  store: { type: String, default: "Local Store" },  // e.g., FreshMart
  distance: { type: String, default: "0.5km" },     // e.g., 0.5km away
  safety: { type: String, default: "Sealed" },      // e.g., "Refrigerated", etc.
});

const Product = mongoose.model("Product", productSchema);

export default Product;
