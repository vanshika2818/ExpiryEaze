import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Organic Greek Yogurt (500g)",
    image: "/images/yogurt.jpg",
    originalPrice: 499,
    discountedPrice: 199,
    expiry: "1 day",
    discount: 60,
    store: "FreshMart",
    distance: "0.5km",
    badges: ["Sealed", "Refrigerated"],
    stockLeft: 3
  },
  // Add more products here
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;