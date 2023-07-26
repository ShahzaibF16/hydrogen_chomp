import React, { useState } from 'react';

const ProteinCalculator = () => {
  const [weightUnit, setWeightUnit] = useState('kg');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Add your calculation logic for the "Calculate" button
  };

  return (
    <section className="relative backdrop-sepia bg-cover bg-center pb-16" style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0261/5197/7009/files/gfsd555.png?v=1690036000')` }} >
       {/* Heading */}
       <div className="bg-main-red py-4">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-white text-7xl text-center">Protein CALCULATOR</h1>
        </div>
      </div>
      <div className="absolute inset-0 bg-protein-overlay"></div>
      <div className="container mx-auto px-4 py-16">
        <form onSubmit={handleSubmit} className="md:w-2/6 sm:w-full mx-auto">
          <div className="flex flex-col items-center">
            {/* Weight Field */}
            <div className="w-full mb-4 bg-white bg-opacity-90 rounded-lg p-6 border-main-red border-2">
              <label htmlFor="weight" className="block text-main-brown font-bold mb-2">
                WEIGHT:
              </label>
              <div className="flex items-center">
                <div className="ml-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="weightUnit"
                      value="kg"
                      checked={weightUnit === 'kg'}
                      onChange={() => setWeightUnit('kg')}
                      className="form-radio text-main-red"
                    />
                    <span className="ml-2">kg</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="weightUnit"
                      value="lbs"
                      checked={weightUnit === 'lbs'}
                      onChange={() => setWeightUnit('lbs')}
                      className="form-radio text-main-red"
                    />
                    <span className="ml-2">lbs</span>
                  </label>
                </div>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  placeholder='Weight'
                  className="w-full py-2 px-4 border rounded-lg border-gray-400 text-main-red"
                />
              </div>
            </div>
            {/* Goal Field */}
            <div className="w-full mb-4 bg-white bg-opacity-75 rounded-lg p-6 border-main-red border-2">
              <label htmlFor="goal" className="block text-main-brown font-bold mb-2">
                GOAL:
              </label>
              <div>
                <label className="inline-flex items-center ml-4">
                  <input type="radio" name="goal" className="form-radio text-main-red" value="lose" />
                  <span className="ml-2">Lose Weight</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input type="radio" name="goal" className="form-radio text-main-red" value="maintain" />
                  <span className="ml-2">Maintain Weight</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input type="radio" name="goal" className="form-radio text-main-red" value="gain" />
                  <span className="ml-2">Gain Weight</span>
                </label>
              </div>
            </div>
            {/* Calculate Button */}
            <button type="submit" className="bg-main-red text-white py-2 px-4 mt-6 rounded-lg font-semibold shadow text-3xl">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProteinCalculator;
