import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStore, FaShoppingCart, FaHeart, FaTruck } from "react-icons/fa";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error("❌ Error fetching product:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-10 text-gray-500">Loading product details...</div>;
  }

  const {
    name = "Unnamed Product",
    image = "https://via.placeholder.com/400x300?text=No+Image",
    price = 0,
    discountedPrice,
    discount = 0,
    expiryDate = "N/A",
    store = "Local Store",
    distance = "",
    deliveryCharge = 0,
    safety = [],
  } = product;

  const finalDiscountedPrice = discountedPrice ?? (price - (price * discount) / 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Gallery */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 bg-green-50 rounded-xl p-4 shadow">
          <img src={image} alt={name} className="w-full rounded-lg" />
          <p className="text-red-600 font-semibold text-sm mt-2 text-center">
            📅 Use by {expiryDate}
          </p>
        </div>

        {/* Info */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-green-800">{name}</h2>

          {/* Prices */}
          <div className="flex items-center gap-3">
            {discount > 0 && (
              <span className="text-gray-400 line-through text-lg">₹{price.toFixed(2)}</span>
            )}
            <span className="text-green-700 font-bold text-xl">
              ₹{finalDiscountedPrice.toFixed(2)}
            </span>
            {discount > 0 && (
              <span className="bg-red-600 text-white text-sm px-2 py-1 rounded font-semibold">
                {discount}% OFF
              </span>
            )}
          </div>

          {/* Pickup/Delivery */}
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <FaStore className="inline mr-1 text-green-600" /> Pickup at {store}
              {distance && ` (${distance})`}
            </p>
            <p>
              <FaTruck className="inline mr-1 text-blue-600" /> Delivery: ₹{deliveryCharge} (Today)
            </p>
          </div>

          {/* Safety */}
          <div className="space-y-1 text-sm mt-2">
            {Array.isArray(safety)
              ? safety.map((s, i) => (
                  <p key={i} className="text-green-700">✅ {s}</p>
                ))
              : safety && <p className="text-green-700">✅ {safety}</p>}
          </div>

          {/* CTAs */}
          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="flex-1 bg-pink-100 hover:bg-pink-200 text-pink-700 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold">
              <FaHeart /> Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
