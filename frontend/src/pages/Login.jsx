import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white text-green-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md border border-green-200 bg-green-50">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

        {/* Role Toggle Tabs */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            onClick={() => setRole('customer')}
            className={`px-4 py-2 rounded-l-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 ${
              role === 'customer'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800'
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setRole('vendor')}
            className={`px-4 py-2 rounded-r-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 ${
              role === 'vendor'
                ? 'bg-green-600 text-white'
                : 'bg-green-100 text-green-800'
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Login Form */}
        <form>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border rounded border-green-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <div className="relative mb-6">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded border-green-300 bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In as {role === 'customer' ? 'Customer' : 'Vendor'}
          </button>
        </form>

        {/* OR Divider */}
        <div className="my-6 flex items-center justify-between">
          <hr className="border-t border-green-300 w-1/3" />
          <span className="text-sm text-green-600">OR</span>
          <hr className="border-t border-green-300 w-1/3" />
        </div>

        {/* Google Sign In (Frontend-only) */}
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-full border border-green-300 py-2 rounded hover:bg-green-100 transition focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <FcGoogle size={20} />
          <span>Sign in with Google</span>
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm mt-6">
          New {role === 'customer' ? 'customer' : 'vendor'}?{' '}
          <Link
            to={`/signup?role=${role}`}
            className="text-green-700 underline hover:text-green-800"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
