
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (category, subcategory) => {
    navigate(`/subcategory-products?${new URLSearchParams({ category, subcategory }).toString()}`);

  };


  return (
    <div className="bg-green-50 min-h-screen px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Shop by Category</h1>
        <p className="text-green-600 text-lg mt-2">Save big on near-expiry essentials!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🍱 Food and Groceries</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Food','Canned and Preserved Foods')}>Canned and Preserved Foods</li>
            <li onClick={() => handleSubcategoryClick('Food','Dry and Powdered Foods')}>Dry and Powdered Foods</li>
            <li onClick={() => handleSubcategoryClick('Food','Spices and Masalas')}>Spices and Masalas</li>
            <li onClick={() => handleSubcategoryClick('Food','Staples and Grains')}>Staples and Grains</li>
            <li onClick={() => handleSubcategoryClick('Food','Snacks (Sealed and Dry)')}>Snacks (Sealed and Dry)</li>
            <li onClick={() => handleSubcategoryClick('Food','Baking and Cooking Essentials')}>Baking and Cooking Essentials</li>
            <li onClick={() => handleSubcategoryClick('Food','Sweeteners and Condiments')}>Sweeteners and Condiments</li>
            <li onClick={() => handleSubcategoryClick('Food','Ready-to-eat Packaged Items')}>Ready-to-eat Packaged Items</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">💊 Medicines and Health</h2>
          <ul className="pl-4 list-disc text-green-700 space-y-2 cursor-pointer">
            <li onClick={() => handleSubcategoryClick('Medicine','Basic Medicines')}>Basic Medicines</li>
            <li onClick={() => handleSubcategoryClick('Medicine','OTC Supplements')}>OTC Supplements</li>
            <li onClick={() => handleSubcategoryClick('Medicine','First-aid Essentials')}>First-aid Essentials</li>
            <li onClick={() => handleSubcategoryClick('Medicine','Immunity Boosters')}>Immunity Boosters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
