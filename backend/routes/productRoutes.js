import express from "express";
import { addProduct, getMyProducts, getFilteredProducts } from "../controllers/productController.js";
const router = express.Router();

router.post("/add", addProduct);
router.get("/my-products/:vendorId", getMyProducts);
router.get("/filter", getFilteredProducts);

export default router;
