import React from 'react';

const HeaadingTextSection = () => {
  return (
    <section className="relative">
      <div className="absolute -top-20 left-4">
        <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_81.png?v=1689770441" alt="Badge" className="w-25 h-25" />
      </div>
      <div className="bg-main-red py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-white text-5xl text-center">Get our famous protein Balls now at Costco stores in Texas, Louisiana, Oklahoma, and Nevada, including 30 Bay Area locations. Available for a limited time!"</h1>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_48.png?v=1689771713" alt="Full Width Image" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeaadingTextSection;
