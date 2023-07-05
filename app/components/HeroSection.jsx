import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-screen flex items-center justify-center">
      <div className="hero-content text-center text-white">
        <h1 className="text-9xl font-bold mb-4 text-red-600">SIMPLY DELICIOUS</h1>
        {/* <p className="text-lg mb-8">Discover the latest trends and shop with style</p> */}
        <button className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold text-3xl">SHOP NOW</button>
      </div>
    </div>
  );
};

export default HeroSection;
