import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Empty initially

  return (
    <div className="min-h-screen bg-white text-green-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Cart 🛒</h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <p className="text-center text-lg">Items will appear here.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
