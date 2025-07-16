import Product from "../models/ProductModel.js";

// Helper to calculate expiry days
const calculateExpiryInDays = (expiryDateStr) => {
  const today = new Date();
  const expiryDate = new Date(expiryDateStr);
  const diff = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
  return diff >= 0 ? diff : 0;
};

// Add Product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      image,
      price,
      discount,
      expiryDate,
      status,
      category,
      subcategory,
      vendorId,
      stock,
      store = "Local Store",
      distance = "0.5km",
      safety = "Sealed",
    } = req.body;

    // Derived values
    const expiryInDays = calculateExpiryInDays(expiryDate);
    const discountedPrice = price - (price * discount) / 100;

    const product = new Product({
      name,
      image,
      price,
      discount,
      expiryDate,
      status,
      category,
      subcategory,
      vendorId,
      stock,
      store,
      distance,
      safety,
      expiryInDays,
      discountedPrice,
    });

    await product.save();
    res.status(201).json({ success: true, product });
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Vendor-Specific Products
export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ vendorId: req.params.vendorId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Products by Subcategory
export const getFilteredProducts = async (req, res) => {
  try {
    const category = decodeURIComponent(req.query.category || "").trim();
    const subcategory = decodeURIComponent(req.query.subcategory || "").trim();

    const products = await Product.find({ category, subcategory });
    res.json(products);
  } catch (err) {
    console.error("❌ Error filtering products:", err);
    res.status(500).json({ error: err.message });
  }
};

// Delete a Product
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Products by Vendor
export const getProductsByVendor = async (req, res) => {
  try {
    const vendorId = req.query.vendorId;
    if (!vendorId) return res.status(400).json({ message: "Vendor ID is required" });

    const products = await Product.find({ vendorId });
    res.status(200).json(products);
  } catch (error) {
    console.error("❌ Error fetching vendor products:", error);
    res.status(500).json({ message: "Server error while fetching vendor products" });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("❌ Error fetching product by ID:", err);
    res.status(500).json({ message: "Server error" });
  }
};
