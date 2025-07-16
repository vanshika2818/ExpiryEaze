// controllers/productController.js
import Product from "../models/ProductModel.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get All Products (for Products Page)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Vendor-Specific Products (for My Items)
export const getMyProducts = async (req, res) => {
  try {
    const products = await Product.find({ vendorId: req.params.vendorId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get by Filter (for Subcategory)
export const getFilteredProducts = async (req, res) => {
  try {

    const category = decodeURIComponent(req.query.category || "").trim();
    const subcategory = decodeURIComponent(req.query.subcategory || "").trim();
    console.log("🔍 Filtering for:", { category, subcategory });

    const products = await Product.find({ category, subcategory });
    console.log("🧪 Found:", products.length, "products");

    res.json(products);
  } catch (err) {
    console.error("❌ Error in filtering products:", err);
    res.status(500).json({ error: err.message });
  }
};




