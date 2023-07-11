import React from 'react';

const HeroSecond = () => {
  return (
    <div className="bg-blue-sky overflow-hidden">
        <svg className="fill-current text-blue-sky bg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,106.7C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div className="max-w-5xl mx-auto py-12">
        <h1 className="text-7xl md:text-7xl text-center mb-6 leading-tight text-white">Bounce into Fitness with Simple Fuel's</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_45.png?v=1689086425" alt="Icon 1" className="w-36 h-36 mb-2" />
              <h2 className="text-center text-4xl">Gluten <br/>Free</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/pre-post-workout.png?v=1689084650" alt="Icon 2" className="w-36 h-36 mb-2" />
              <h2 className="text-center text-4xl">Pre+Post Workout</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/whole-food-protien.png?v=1689084649" alt="Icon 3" className="w-36 h-36 mb-2" />
              <h2 className="text-center text-4xl">Whole Food Protien</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/onthego-fuel.png?v=1689084649" alt="Icon 4" className="w-36 h-36 mb-2" />
              <h2 className="text-center text-4xl">On-the-Go Fuel</h2>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4">
            <div className="flex flex-col items-center">
              <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/1billion-probiotics.png?v=1689084649" alt="Icon 5" className="w-36 h-36 mb-2" />
              <h2 className="text-center text-4xl">1 Billion Probiotics</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
