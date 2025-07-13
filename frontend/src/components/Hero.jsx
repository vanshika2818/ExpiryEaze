import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Hero = () => {
  const images = [
    'https://source.unsplash.com/1600x900/?eco,waste',
    'https://source.unsplash.com/1600x900/?grocery,discount',
    'https://source.unsplash.com/1600x900/?medicine,expired',
    'https://source.unsplash.com/1600x900/?barcode,scan'
  ];

  return (
    <div className="relative h-[90vh]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>
              <div className="relative z-10 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Fighting Waste, One Expiry Date at a Time
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                  ExpiryEaze bridges the gap between surplus near-expiry products and conscious consumers—reducing waste, saving costs, and protecting the planet.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="/signup" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
                    Join the Movement
                  </a>
                  <a href="#how" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-green-800 transition">
                    How It Works →
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
