import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    _id: "1",
    name: "Organic Greek Yogurt (500g)",
    image: "/images/yogurt.jpg",
    price: 499,
    discount: 60,
    discountedPrice: 199,
    expiryInDays: 1,
    store: "FreshMart",
    distance: "0.5km",
    safety: ["Sealed", "Refrigerated"],
    stock: 3,
    category: "Food",
  },
  {
    _id: "2",
    name: "Ayurvedic Cough Syrup",
    image: "/images/cough-syrup.jpg",
    price: 220,
    discount: 50,
    discountedPrice: 110,
    expiryInDays: 5,
    store: "MediLife",
    distance: "1.2km",
    safety: "Check expiry before use",
    stock: 2,
    category: "Medicine",
  },
  // ➕ Add more dummy products as needed
];

const ProductGrid = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold text-green-800 mb-1">Shop by Category</h2>
      <p className="text-green-700 mb-6">Save big on near-expiry essentials!</p>

      <input
        type="text"
        placeholder="Search products..."
        className="w-full md:w-1/3 px-4 py-2 mb-6 border border-green-300 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
