import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch {
        console.error("Invalid user in storage");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setShowLogout(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-green-800 text-2xl font-bold">ExpiryEaze 🌿</div>
      <nav className="flex gap-6 items-center text-green-800 font-medium">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>

        {/* ✅ Vendor-only "Add Items" link */}
        {user && user.role === 'vendor' && (
  <Link to="/vendor-dashboard" className="text-green-800 font-semibold hover:underline">
    Dashboard
  </Link>
)}


        <Link to="/cart" className="relative">
          <FaShoppingCart />
          <span className="absolute -top-2 -right-2 text-xs bg-green-600 text-white px-1 rounded-full">0</span>
        </Link>

        {user ? (
          <div className="relative">
            <button onClick={() => setShowLogout(!showLogout)} className="font-semibold">
              {user.name} ({user.role})
            </button>
            {showLogout && (
              <div
                className="absolute right-0 bg-white border mt-2 px-4 py-2 text-red-600 cursor-pointer"
                onClick={handleLogout}
              >
                Log Out
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
