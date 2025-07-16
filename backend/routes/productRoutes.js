import express from "express";
import {
  addProduct,
  getAllProducts,
  getMyProducts,
  getFilteredProducts,
  getProductsByVendor,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// ✅ Add Product
router.post("/add", addProduct);

// ✅ All Products
router.get("/all", getAllProducts);

// ✅ Vendor-specific Products (My Items)
router.get("/vendor/:vendorId", getMyProducts);

// ✅ Filter by category/subcategory
router.get("/filter", getFilteredProducts);

// ✅ Subcategory + category products
router.get("/subcategory-products", getFilteredProducts);
// ✅ Vendor products (by vendorId query param)
router.get("/vendor-products", getProductsByVendor);

// ✅ Product by ID (for product detail page)
router.get("/:id", getProductById);

// ✅ Delete Product
router.delete("/:id", deleteProduct);

export default router;
