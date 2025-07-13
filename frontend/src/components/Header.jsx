import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-green-800 text-2xl font-bold">ExpiryEaze 🌿</div>

        {/* Search */}
        <form className="flex w-full md:w-1/3 my-4 md:my-0">
          <input
            type="text"
            placeholder="Search near-expiry products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-green-300 rounded-l"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r">Search</button>
        </form>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-green-900 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">0</span>
          </Link>
          <Link to="/login" >Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
