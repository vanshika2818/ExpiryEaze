import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-10">
      <div className="bg-white shadow-md rounded p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Vendor Dashboard</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate('/my-items')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            My Items
          </button>
          <button
            onClick={() => navigate('/add-product')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            Add Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
