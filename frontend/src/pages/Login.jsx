import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
setUser(res.data.user);

      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || '❌ Login failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-green-900 px-4 py-10">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md border border-green-200 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded border-green-300" required />

          <label className="block mb-1 font-medium">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 mb-6 border rounded border-green-300" required />

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account? <Link to="/signup" className="text-green-700 underline hover:text-green-800">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
