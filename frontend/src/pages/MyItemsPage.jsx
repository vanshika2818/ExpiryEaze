import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaBullhorn, FaTrash } from "react-icons/fa";

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "text-green-600 font-semibold";
    case "Low Stock":
      return "text-orange-500 font-semibold";
    case "Expiring Today":
      return "text-red-600 font-semibold";
    default:
      return "text-gray-600";
  }
};

const MyItemsPage = () => {
  const [products, setProducts] = useState([]);
  const vendorId = JSON.parse(localStorage.getItem("user"))?._id;

  // Fetch vendor's products
  const fetchMyItems = async () => {
  if (!vendorId) {
    console.warn("Vendor ID not found in localStorage");
    return;
  }

  try {
    const res = await axios.get(`http://localhost:8000/api/products/vendor-products?vendorId=${vendorId}`);
    setProducts(res.data);
  } catch (err) {
    console.error("❌ Error fetching items:", err);
  }
};


  useEffect(() => {
    fetchMyItems();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to remove this item?");
    if (!confirm) return;

    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`);
      setProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("❌ Error deleting product:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-800 mb-6">📦 My Product Listings</h2>

      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="text-left px-4 py-2">Product</th>
            <th className="text-left px-4 py-2">Expiry</th>
            <th className="text-left px-4 py-2">Discount</th>
            <th className="text-left px-4 py-2">Status</th>
            <th className="text-left px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {products.map((item) => (
            <tr key={item._id} className="border-t hover:bg-green-50 transition">
              <td className="px-4 py-3 font-medium text-green-800">{item.name}</td>
              <td className="px-4 py-3">{item.expiryDate}</td>
              <td className="px-4 py-3">{item.discountPercent}% OFF</td>
              <td className="px-4 py-3">
                <span className={getStatusColor(item.status)}>{item.status}</span>
              </td>
              <td className="px-4 py-3 space-x-3">
                <button className="text-blue-600 hover:underline flex items-center gap-1">
                  ✏️ Edit
                </button>
                <button className="text-yellow-600 hover:underline flex items-center gap-1">
                  <FaBullhorn /> Boost
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="text-red-600 hover:underline flex items-center gap-1"
                >
                  <FaTrash /> Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Legend */}
      <div className="mt-4 text-sm text-gray-600">
        <span className="mr-4">🟢 Active</span>
        <span className="mr-4">🟠 Low Stock</span>
        <span>🔴 Expiring Today</span>
      </div>
    </div>
  );
};

export default MyItemsPage;
