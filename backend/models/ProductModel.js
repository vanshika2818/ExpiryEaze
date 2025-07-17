import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: Number,
  discountedPrice: Number,
  discount: Number,
  expiryDate: { type: Date, required: true },
  expiryInDays: Number,
  status: String,
  category: String,
  subcategory: String,
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stock: Number,

  // Extra display fields
  store: { type: String, default: "Local Store" },
  distance: { type: String, default: "0.5km" },
  safety: { type: String, default: "Sealed" },
}, { timestamps: true });

// Auto-calculate fields
productSchema.pre("save", function (next) {
  if (this.price && this.discount) {
    this.discountedPrice = Math.round(this.price - (this.price * this.discount / 100));
  }

  if (this.expiryDate) {
    const today = new Date();
    const expiry = new Date(this.expiryDate);
    const diffTime = expiry - today;
    this.expiryInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  if (this.expiryInDays <= 0) {
    this.status = "Expired";
  } else if (this.expiryInDays <= 2) {
    this.status = "Expiring Today";
  } else if (this.stock <= 5) {
    this.status = "Low Stock";
  } else {
    this.status = "Active";
  }

  next();
});

const Product = mongoose.model("Product", productSchema);
export default Product;
