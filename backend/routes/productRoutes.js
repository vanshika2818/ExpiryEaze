import express from "express";
import { getAllProducts, createProduct } from "../controllers/productController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", requireAuth, createProduct);

export default router;
