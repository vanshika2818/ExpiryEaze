
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SubcategoryProducts = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get("category");
  const subcategory = queryParams.get("subcategory");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
  try {
    const res = await fetch(`http://localhost:8000/api/products/filter?category=${category}&subcategory=${subcategory}`);
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("❌ Expected array, got:", data);
      setProducts([]);
    } else {
      setProducts(data);
    }
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    setProducts([]);
  }
};


    if (category && subcategory) fetchProducts();
  }, [category, subcategory]);

  return (
    <div className="min-h-screen px-4 py-8 bg-green-50">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Showing: {subcategory} in {category}
      </h1>

      {products.length === 0 ? (
        <p className="text-green-800">No products found in this subcategory.</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product._id} className="border border-green-300 rounded-lg p-4 bg-white shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2 text-green-800">{product.name}</h2>
              <p className="text-sm text-green-600">Stock: {product.stock}</p>
              <p className="text-sm text-green-600">Expires on: {product.expiryDate}</p>
              <p className="text-sm text-green-800 font-bold">
                ₹{product.price} → <span className="line-through text-red-500">{(product.price / (1 - product.discount / 100)).toFixed(0)}</span>
              </p>
              <button className="mt-2 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryProducts;
