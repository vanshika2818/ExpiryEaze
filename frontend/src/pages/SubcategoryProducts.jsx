

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // ✅ updated path

const SubcategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const subcategory = searchParams.get('subcategory');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Querying for:", { category, subcategory }); // ✅ helpful log
        const res = await axios.get(
  `http://localhost:8000/api/products/subcategory-products?category=${encodeURIComponent(category)}&subcategory=${encodeURIComponent(subcategory)}`
);

        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    if (category && subcategory) fetchProducts();
  }, [category, subcategory]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold text-green-800 mb-4">{subcategory}</h2>
      {products.length === 0 ? (
        <p className="text-red-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryProducts;

