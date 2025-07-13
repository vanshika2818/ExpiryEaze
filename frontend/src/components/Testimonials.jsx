import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
          Social Proof
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-800 text-lg">
          <div className="bg-green-100 p-6 rounded shadow">
            <p className="italic">"I saved 40% on groceries while reducing waste!"</p>
            <p className="mt-2 font-semibold">– Priya, Student</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow">
            <p className="italic">"Pharmacies use ExpiryEaze to donate near-expiry meds responsibly."</p>
            <p className="mt-2 font-semibold">– Dr. Ahmed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
