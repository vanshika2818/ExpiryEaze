import React from "react";
import { FaShoppingCart, FaStore } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    name,
    image,
    originalPrice,
    discountedPrice,
    discountPercent,
    expiryInDays,
    store,
    distance,
    safety,
    stock,
  } = product;

  // Expiry urgency colors
  const getExpiryColor = () => {
    if (expiryInDays <= 7) return "bg-red-500";
    if (expiryInDays <= 30) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="relative bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Discount Badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold z-10">
        {discountPercent}% OFF
      </div>

      {/* Expiry */}
      <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded font-semibold z-10 ${getExpiryColor()}`}>
        Expires in {expiryInDays} day{expiryInDays > 1 ? "s" : ""}
      </div>

      {/* Image */}
      <div className="overflow-hidden h-48 flex justify-center items-center bg-green-50">
        <img
          src={image}
          alt={name}
          className="object-cover h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-4 text-green-900">
        <h3 className="font-semibold text-base mb-1">{name}</h3>

        {/* Prices */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 line-through">₹{originalPrice}</span>
          <span className="text-green-700 font-bold">₹{discountedPrice}</span>
        </div>

        {/* Store Info */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FaStore className="mr-1" /> {store} • {distance} away
        </div>

        {/* Safety Badge */}
        <div className="text-xs bg-green-100 text-green-800 inline-block px-2 py-1 rounded mb-2">
          🛡️ {safety}
        </div>

        {/* Stock Alert */}
        {stock <= 5 && (
          <div className="text-xs text-red-600 mb-2">Only {stock} left!</div>
        )}

        {/* Add to Cart */}
        <button className="flex items-center justify-center gap-2 w-full py-2 mt-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold">
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
