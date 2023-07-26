import React from 'react';

const ImageTextBoxSection = () => {
  return (
    <section className="bg-blue-sky py-24">
        {/* <img  className='absolute bottom-0 left-2 w-auto' src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/9b58fc0bb37745317579957217db944d.png?v=1690037531"/> */}
      <div className="container mx-auto px-4">
        {/* Box in the middle */}
        <div className="bg-white rounded-3xl border-4 border-main-red p-8 md:p-12 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-main-red">MEET MITZI</h1>
          <p className="text-lg md:text-xl mb-4 text-main-brown">FOUNDER+SPORTS NUTRIONIST</p>
          <p className="text-main-brown mb-6 leading-tight">Fuel your family with my kitchen crafted, world famous protein balls that helped fuel the World Series Champs in 2015! As the team sports nutritionist for the Kansas City Royals, I made my yummy protein balls for the players, who loved them so much, they became the go-to clubhouse snack, fueling them to a World Championship!</p>
          <button className="bg-main-red hover:bg-transparent text-white px-6 py-3 rounded-lg font-semibold hover:border-2 hover:border-main-red hover:text-main-red">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageTextBoxSection;
