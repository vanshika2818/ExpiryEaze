import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = ({ setUser }) => {
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const initialRole = searchParams.get('role');
    if (initialRole === 'vendor') setRole('vendor');
  }, [searchParams]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
        name, email, password, role,
      });

      const user = res.data.user;

      if (!user || !user._id) {
        alert("❌ Invalid user data.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      alert("🟢 Signed up as " + user.role);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || '❌ Signup failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-900 px-4 py-10">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md border border-green-200 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

        <div className="flex justify-center mb-6">
          <button onClick={() => setRole('customer')} className={`px-4 py-2 rounded-l-lg font-semibold ${role === 'customer' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
            Customer
          </button>
          <button onClick={() => setRole('vendor')} className={`px-4 py-2 rounded-r-lg font-semibold ${role === 'vendor' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
            Vendor
          </button>
        </div>

        <form onSubmit={handleSignup}>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded border-green-300" required />
          
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded border-green-300" required />

          <label className="block mb-1 font-medium">Password</label>
          <div className="relative mb-6">
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded border-green-300 pr-10" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-green-700">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
            Sign Up as {role}
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Already a {role}? <Link to="/login" className="text-green-700 underline hover:text-green-800">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
