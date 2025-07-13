import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const initialRole = searchParams.get('role');
    if (initialRole === 'vendor') setRole('vendor');
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white text-green-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md border border-green-200 bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        {/* Role Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole('customer')}
            className={`px-4 py-2 rounded-l-lg font-semibold ${
              role === 'customer'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800'
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setRole('vendor')}
            className={`px-4 py-2 rounded-r-lg font-semibold ${
              role === 'vendor'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800'
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Form */}
        <form>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 mb-4 border rounded border-green-300 bg-white"
            required
          />

          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border rounded border-green-300 bg-white"
            required
          />

          <label className="block mb-1 font-medium">Password</label>
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded border-green-300 bg-white pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-green-700"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
          >
            Sign Up as {role === 'customer' ? 'Customer' : 'Vendor'}
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm mt-6">
          Already a {role}?{' '}
          <Link
            to={`/login`}
            className="text-green-700 underline hover:text-green-800"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
