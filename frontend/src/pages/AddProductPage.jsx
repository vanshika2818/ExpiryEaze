import React, { useState } from 'react';

const AddProductPage = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [stock, setStock] = useState('');
  const [productName, setProductName] = useState('');


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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user")); // Get vendor info

  if (!user || !user._id) {
    alert("❌ User not found. Please log in again.");
    return;
  }

  const productData = {
    name: productName,
    image: image ? URL.createObjectURL(image) : "", // Use actual URL if using Cloudinary
    price: originalPrice,
    discount: ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0),
    expiryDate,
    status: "Active", // You can make this dynamic later
    category,
    subcategory,
    vendorId: user._id,
    stock: stock,
  };

  try {
    const res = await fetch("http://localhost:8000/api/products/add", {
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
        {/* Image Upload */}
        <div className="border-2 border-dashed border-green-400 p-4 rounded text-center">
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {image && <p className="mt-2 text-green-600">✔️ {image.name}</p>}
        </div>

        {/* Product Name */}
        <input
  type="text"
  placeholder="Product Name (e.g., Amul Cheese 200g)"
  className="w-full p-2 border rounded"
  required
  value={productName}
  onChange={(e) => setProductName(e.target.value)}
/>


        {/* Category */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory('');
          }}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Medicine">Medicine</option>
        </select>

        {/* Subcategory */}
        {category && (
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Subcategory</option>
            {subcategoriesMap[category].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        )}

        {/* Expiry Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          {expiryDate && new Date(expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && (
            <p className="text-red-600 mt-1 text-sm">⚠️ This product expires in less than 7 days.</p>
          )}
        </div>

        {/* Pricing */}
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Original Price (₹)"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-1/2 p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Discounted Price (₹)"
            value={discountedPrice}
            onChange={(e) => setDiscountedPrice(e.target.value)}
            className="w-1/2 p-2 border rounded"
            required
          />
        </div>

        {/* Stock */}
        <input
          type="number"
          placeholder="Stock Quantity (e.g., 20 units)"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-semibold"
        >
          ✅ Publish Now
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
