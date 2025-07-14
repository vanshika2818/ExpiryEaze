// src/pages/ProductsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/products/${subcategory.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="bg-green-50 min-h-screen px-4 py-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Shop by Category</h1>
        <p className="text-green-600 text-lg mt-2">Save big on near-expiry essentials!</p>

        {/* Search Bar */}
        <div className="mt-6 max-w-md mx-auto flex">
          <input
            type="text"
            placeholder="Search rice, dal, coffee..."
            className="flex-1 px-4 py-2 rounded-l border border-green-300 focus:outline-none"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r">
            Search
          </button>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Food & Groceries */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🍱 Food & Groceries</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Canned & Preserved Foods')}>Canned & Preserved Foods</li>
            <li onClick={() => handleSubcategoryClick('Dry & Powdered Foods')}>Dry & Powdered Foods</li>
            <li onClick={() => handleSubcategoryClick('Spices & Masalas')}>Spices & Masalas</li>
            <li onClick={() => handleSubcategoryClick('Staples & Grains')}>Staples & Grains</li>
            <li onClick={() => handleSubcategoryClick('Snacks (Sealed & Dry)')}>Snacks (Sealed & Dry)</li>
            <li onClick={() => handleSubcategoryClick('Baking & Cooking Essentials')}>Baking & Cooking Essentials</li>
            <li onClick={() => handleSubcategoryClick('Sweeteners & Condiments')}>Sweeteners & Condiments</li>
            <li onClick={() => handleSubcategoryClick('Ready-to-eat Packaged Items')}>Ready-to-eat Packaged Items</li>
          </ul>
        </div>

        {/* Medicines & Health */}
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">💊 Medicines & Health</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Basic Medicines')}>Basic Medicines</li>
            <li onClick={() => handleSubcategoryClick('OTC Supplements')}>OTC Supplements</li>
            <li onClick={() => handleSubcategoryClick('First-aid Essentials')}>First-aid Essentials</li>
            <li onClick={() => handleSubcategoryClick('Immunity Boosters')}>Immunity Boosters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
