import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Research Whitepaper (PDF)</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Our Pledge</h3>
          <p>
            ExpiryEaze is committed to <br /> UN SDG 12 (Responsible Consumption)
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="hover:text-gray-300">Twitter/X</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-8">© 2025 ExpiryEaze. All rights reserved.</div>
    </footer>
  );
};

export default Footer;