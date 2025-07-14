import React from 'react';

const AddProductPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-10">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow-md border border-green-200">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Add New Product</h2>

        <form>
          <label className="block mb-2 font-medium">Product Name</label>
          <input type="text" className="w-full border px-4 py-2 rounded mb-4" required />

          <label className="block mb-2 font-medium">Price</label>
          <input type="number" className="w-full border px-4 py-2 rounded mb-4" required />

          <label className="block mb-2 font-medium">Expiry Date</label>
          <input type="date" className="w-full border px-4 py-2 rounded mb-6" required />

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage; // ✅ REQUIRED
