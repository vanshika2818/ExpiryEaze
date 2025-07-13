import React from 'react';

const SolutionSection = () => {
  return (
    <section className="bg-green-50 py-16 px-6" id="solution">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            A Smarter Way to Manage Expiry Dates
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
            <li>
              🔄 <strong>Centralized Marketplace:</strong> Buy/sell near-expiry food & medicine at discounted rates.
            </li>
            <li>
              🔍 <strong>Authenticity Checks:</strong> Verified sellers and FDA-compliant listings.
            </li>
            <li>
              📱 <strong>Real-Time Tracking:</strong> Get alerts before items expire.
            </li>
            <li>
              ♻️ <strong>Sustainability Dashboard:</strong> Track your waste reduction impact.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/600x400/?app,tracker"
            alt="App Screenshot"
            className="rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;