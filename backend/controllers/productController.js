import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, expiryDate } = req.body;
    const newProduct = await Product.create({ name, description, price, expiryDate });
    res.status(201).json(newProduct);
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};
