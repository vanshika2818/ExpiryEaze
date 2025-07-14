import React, { useState } from 'react';

const MyItemsPage = () => {
  const [productList, setProductList] = useState([
    { name: 'Amul Cheese', expiry: 'Jul 25', discount: '60%', status: 'Active' },
    { name: 'Crocin', expiry: 'Aug 10', discount: '50%', status: 'Low Stock' }
  ]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Items</h2>

      <h3 className="text-xl font-semibold mb-4">Existing Product List</h3>
      <table className="min-w-full border border-gray-300 text-sm">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-2 text-left">Product</th>
            <th className="border p-2 text-left">Expiry</th>
            <th className="border p-2 text-left">Discount</th>
            <th className="border p-2 text-left">Status</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((item, idx) => (
            <tr key={idx}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.expiry}</td>
              <td className="border p-2">{item.discount} OFF</td>
              <td
                className={`border p-2 font-semibold ${
                  item.status === 'Active'
                    ? 'text-green-600'
                    : item.status === 'Low Stock'
                    ? 'text-orange-500'
                    : 'text-red-600'
                }`}
              >
                {item.status === 'Active' && '🟢 '}
                {item.status === 'Low Stock' && '🟠 '}
                {item.status === 'Expiring Today' && '🔴 '}
                {item.status}
              </td>
              <td className="border p-2 space-x-2">
                <button className="text-blue-600 hover:underline">🖊️ Edit</button>
                <button className="text-green-700 hover:underline">🔔 Boost</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItemsPage;
