import React from 'react';

const BenefitCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-evenly">
          {/* Card 1 */}
          <div className="max-w-xl rounded-lg overflow-hidden shadow-md m-4 bg-light-brown">
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_90.png?v=1690372332"
              alt="Card Image 1"
              className="object-cover h-auto w-full"
            />
            <div className="p-4">
              <h3 className="text-2xl font-light mb-2 text-white text-center">FUEL YOUR ADVENTURES</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xl rounded-lg overflow-hidden shadow-md m-4 bg-light-brown">
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_89.png?v=1690372332"
              alt="Card Image 2"
              className="object-cover h-auto w-full"
            />
            <div className="p-4">
              <h3 className="text-2xl font-light mb-2 text-white text-center">KIDS LOVE ‘EM</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xl rounded-lg overflow-hidden shadow-md m-4 bg-light-brown">
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_14.png?v=1690372332"
              alt="Card Image 3"
              className="object-cover h-auto w-full"
            />
            <div className="p-4">
              <h3 className="text-2xl font-light mb-2 text-white text-center">PERFECT PRE+POST WORKOUT</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;