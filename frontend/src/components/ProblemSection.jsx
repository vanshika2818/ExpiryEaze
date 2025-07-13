import React from 'react';

const ProblemSection = () => {
  return (
    <section className="bg-white py-16 px-6" id="problem">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img
            src="https://kodeforest.net/html/eco-friendly/images/eco-services-center-img.png"
            alt="Expiry Awareness"
            className="w-full h-auto rounded shadow"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
            Why Expiry Management Matters
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>🌍 <strong>Environmental Harm:</strong> Expired medicines contaminate ecosystems; food waste fuels climate change.</p>
            <p>💸 <strong>Economic Loss:</strong> Households lose ₹1.2L/year on wasted groceries (FDA).</p>
            <p>🩺 <strong>Health Risks:</strong> Unsafe disposal of medicines affects public health.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;