import React, { useState } from 'react';
import axios from "axios";

const AddProductPage = () => {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [stock, setStock] = useState('');
  const [productName, setProductName] = useState('');
  const [store, setStore] = useState('');
  const [distance, setDistance] = useState('');
  const [safety, setSafety] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('');
  const [storageInfo, setStorageInfo] = useState('');

  const subcategoriesMap = {
    Food: [
      'Canned and Preserved Foods',
      'Dry and Powdered Foods',
      'Spices and Masalas',
      'Staples and Grains',
      'Snacks (Sealed and Dry)',
      'Baking and Cooking Essentials',
      'Sweeteners and Condiments',
      'Ready-to-eat Packaged Items'
    ],
    Medicine: [
      'Basic Medicines',
      'OTC Supplements',
      'First-aid Essentials',
      'Immunity Boosters'
    ],
  };

const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Unsigned preset

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_BACKEND_URL}/image/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.secure_url) {
      setImage(data.secure_url);
      console.log("✅ Uploaded:", data.secure_url);
    } else {
      throw new Error("Upload failed");
    }
  } catch (err) {
    console.error("Cloudinary Upload Error:", err);
    alert("❌ Failed to upload image.");
  }
};

  // ✅ Moved this up to avoid ReferenceError
  const calculateExpiryInDays = (expiry) => {
    const today = new Date();
    const expiryD = new Date(expiry);
    const diff = Math.ceil((expiryD - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user._id) {
      alert("❌ User not found. Please log in again.");
      return;
    }

    const price = Number(originalPrice);
    const discounted = Number(discountedPrice);
    const discount = price && discounted ? ((price - discounted) / price * 100).toFixed(0) : 0;

    const productData = {
      name: productName,
      image, // 📌 Replace with Cloudinary upload later
      price,
      discount,
      discountedPrice: discounted,
      expiryDate,
      status: "Active",
      category,
      subcategory,
      vendorId: user._id,
      stock: Number(stock),
      expiryInDays: calculateExpiryInDays(expiryDate),
      store: store || user.storeName || "Local Store",
      distance: distance || "0.5km",
      safety: safety || "Sealed Packaging",
      deliveryOption,
      storageInfo,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        alert("🟢 Product published successfully!");
      } else {
        alert("❌ Error adding product.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Server error.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6 text-green-700">🛒 Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-green-400 p-4 rounded text-center">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && <p className="mt-2 text-green-600">✔️ Image uploaded</p>}
        </div>

        <input type="text" placeholder="Product Name" className="w-full p-2 border rounded" required value={productName} onChange={(e) => setProductName(e.target.value)} />
        <input type="text" placeholder="Store Name" className="w-full p-2 border rounded" required value={store} onChange={(e) => setStore(e.target.value)} />
        <input type="text" placeholder="Store Distance (e.g., 0.5km)" className="w-full p-2 border rounded" required value={distance} onChange={(e) => setDistance(e.target.value)} />
        <input type="text" placeholder="Safety Info (e.g., Sealed, Refrigerated)" className="w-full p-2 border rounded" required value={safety} onChange={(e) => setSafety(e.target.value)} />
        <input type="text" placeholder="Delivery Option (e.g., Pickup only)" className="w-full p-2 border rounded" required value={deliveryOption} onChange={(e) => setDeliveryOption(e.target.value)} />
        <input type="text" placeholder="Storage Info (e.g., Stored at 4°C)" className="w-full p-2 border rounded" required value={storageInfo} onChange={(e) => setStorageInfo(e.target.value)} />

        <select value={category} onChange={(e) => { setCategory(e.target.value); setSubcategory(''); }} className="w-full p-2 border rounded" required>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
        </select>

        {category && (
          <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} className="w-full p-2 border rounded" required>
            <option value="">Select Subcategory</option>
            {subcategoriesMap[category].map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-full p-2 border rounded" required />
          {expiryDate && new Date(expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && (
            <p className="text-red-600 mt-1 text-sm">⚠️ This product expires in less than 7 days.</p>
          )}
        </div>

        <div className="flex gap-4">
          <input type="number" placeholder="Original Price (₹)" value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} className="w-1/2 p-2 border rounded" required />
          <input type="number" placeholder="Discounted Price (₹)" value={discountedPrice} onChange={(e) => setDiscountedPrice(e.target.value)} className="w-1/2 p-2 border rounded" required />
        </div>

        <input type="number" placeholder="Stock Quantity (e.g., 20 units)" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full p-2 border rounded" required />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold">
          ✅ Publish Now
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
