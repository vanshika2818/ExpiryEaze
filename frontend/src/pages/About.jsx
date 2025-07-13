import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-green-900 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-800 text-center">
          About Expiry Eaze 🌿
        </h1>

        <p className="mb-4 text-lg">
          <strong>Expiry Eaze</strong> is a sustainable e-commerce platform that helps users purchase 
          products nearing their expiry date at highly discounted prices.
        </p>

        <p className="mb-4 text-lg">
          Our mission is to reduce unnecessary food and product waste by connecting consumers with 
          perfectly usable goods that would otherwise be thrown away. We believe small steps toward 
          sustainability can make a huge difference. 💚
        </p>

        <p className="mb-4 text-lg">
          Whether you're a conscious shopper, a student trying to save money, or someone who simply 
          wants to help the planet — Expiry Eaze is for you!
        </p>

        <p className="mt-8 text-center text-green-700 font-semibold">
          Save more. Waste less. Shop smarter. ♻️
        </p>
      </div>
    </div>
  );
};

export default About;
