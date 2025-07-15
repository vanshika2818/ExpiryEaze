// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MyItems = () => {
//   const [products, setProducts] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/my-products/${user._id}`)
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-bold mb-4">My Products</h2>
//       {products.length === 0 ? <p>No items added yet.</p> :
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {products.map(p => (
//             <div key={p._id} className="border p-4 rounded shadow">
//               <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
//               <h3 className="font-bold">{p.name}</h3>
//               <p>₹{p.price} (-{p.discount}%)</p>
//               <p>Expiry: {new Date(p.expiryDate).toLocaleDateString()}</p>
//               <span className="text-sm text-gray-600">{p.category} &gt; {p.subcategory}</span>

//             </div>
//           ))}
//         </div>
//       }
//     </div>
//   );
// };

// export default MyItems;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !user._id) return;
    axios
      .get(`http://localhost:8000/api/products/my-products/${user._id}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Products</h2>
      {products.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map(p => (
            <div key={p._id} className="border p-4 rounded shadow">
              <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
              <h3 className="font-bold">{p.name}</h3>
              <p>₹{p.price} (-{p.discount}%)</p>
              <p>Expiry: {new Date(p.expiryDate).toLocaleDateString()}</p>
              <span className="text-sm text-gray-600">{p.category} &gt; {p.subcategory}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyItems;
