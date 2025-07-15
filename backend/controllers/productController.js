import ProductModel from "../models/ProductModel.js";

export const addProduct = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getMyProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({ vendorId: req.params.vendorId });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getFilteredProducts = async (req, res) => {
  const { category, subcategory } = req.query;
  try {
    const products = await Product.find({ category, subcategory });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
