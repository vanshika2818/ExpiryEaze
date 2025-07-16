import React from 'react';
import { FaShoppingCart, FaStore, FaExclamationTriangle, FaPills } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name = "Unnamed Product",
    image = "https://via.placeholder.com/400x300?text=No+Image",
    price = 0,
    discountedPrice,
    discount = 0,
    expiryInDays,
    store = "Local Store",
    distance = "",
    safety = "Sealed & Stored",
    stock = 20,
    category = "Food",
  } = product;

  const finalDiscountedPrice = discountedPrice ?? price - (price * discount) / 100;
  const isMedicine = category === 'Medicine';

  const getExpiryColor = () => {
    if (!expiryInDays) return 'bg-gray-400';
    if (expiryInDays <= 7) return 'bg-red-500';
    if (expiryInDays <= 30) return 'bg-orange-400';
    return 'bg-green-500';
  };

  return (
    <div className="relative bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold z-10">
          {discount}% OFF
        </div>
      )}

      {/* Expiry */}
      {expiryInDays !== undefined && (
        <div className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded font-semibold z-10 ${getExpiryColor()}`}>
          Expires in {expiryInDays} day{expiryInDays > 1 ? 's' : ''}
        </div>
      )}

      {/* Image */}
      <Link to={`/product/${_id}`}>
        <div className="overflow-hidden h-48 flex justify-center items-center bg-green-50">
          <img
            src={image}
            alt={name}
            className="object-cover h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="p-4 text-green-900">
        <h3 className="font-semibold text-base mb-1">{name}</h3>

        {/* Prices */}
        <div className="flex items-center gap-2 mb-2">
          {discount > 0 && (
            <span className="text-gray-400 line-through">₹{price.toFixed(2)}</span>
          )}
          <span className="text-green-700 font-bold">₹{finalDiscountedPrice.toFixed(2)}</span>
        </div>

        {/* Store Info */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <FaStore className="mr-1" /> {store}
          {distance && <> • {distance} away</>}
        </div>

        {/* Safety Badge or Warning */}
        {isMedicine ? (
          <div className="text-xs text-red-600 flex items-center gap-1 mb-2">
            <FaExclamationTriangle /> Check expiry before use
          </div>
        ) : (
          <div className="text-xs bg-green-100 text-green-800 inline-block px-2 py-1 rounded mb-2">
            🛡️ {safety}
          </div>
        )}

        {/* Stock Alert */}
        {stock <= 5 && (
          <div className="text-xs text-red-600 mb-2">Only {stock} left!</div>
        )}

        {/* CTA Button */}
        <button
          className={`flex items-center justify-center gap-2 w-full py-2 mt-2 text-white rounded-lg font-semibold ${
            isMedicine ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isMedicine ? <FaPills /> : <FaShoppingCart />}
          {isMedicine ? 'Buy Now' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
