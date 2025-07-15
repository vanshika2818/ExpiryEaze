
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (category, subcategory) => {
  navigate(`/subcategory-products?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`);
};


  return (
    <div className="bg-green-50 min-h-screen px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Shop by Category</h1>
        <p className="text-green-600 text-lg mt-2">Save big on near-expiry essentials!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🍱 Food & Groceries</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Food','Canned & Preserved Foods')}>Canned & Preserved Foods</li>
            <li onClick={() => handleSubcategoryClick('Food','Dry & Powdered Foods')}>Dry & Powdered Foods</li>
            <li onClick={() => handleSubcategoryClick('Food','Spices & Masalas')}>Spices & Masalas</li>
            <li onClick={() => handleSubcategoryClick('Food','Staples & Grains')}>Staples & Grains</li>
            <li onClick={() => handleSubcategoryClick('Food','Snacks (Sealed & Dry)')}>Snacks (Sealed & Dry)</li>
            <li onClick={() => handleSubcategoryClick('Food','Baking & Cooking Essentials')}>Baking & Cooking Essentials</li>
            <li onClick={() => handleSubcategoryClick('Food','Sweeteners & Condiments')}>Sweeteners & Condiments</li>
            <li onClick={() => handleSubcategoryClick('Food','Ready-to-eat Packaged Items')}>Ready-to-eat Packaged Items</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">💊 Medicines & Health</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Basic Medicines', 'Medicine')}>Basic Medicines</li>
            <li onClick={() => handleSubcategoryClick('OTC Supplements', 'Medicine')}>OTC Supplements</li>
            <li onClick={() => handleSubcategoryClick('First-aid Essentials', 'Medicine')}>First-aid Essentials</li>
            <li onClick={() => handleSubcategoryClick('Immunity Boosters', 'Medicine')}>Immunity Boosters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
