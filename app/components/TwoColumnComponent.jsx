import React from 'react';

const TwoColumnComponent = () => {
    return (
        <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-4">
                    <div className="rounded-sixty border-4 border-main-red max-w-xs mx-auto">
                        <img src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/Rectangle_28.png?v=1689409336" alt="Image" className="rounded-sixty" />
                    </div>
                </div>
                <div className="md:w-1/2 p-4 max-w-md">
                    <h2 className="text-5xl md:text-5xl mb-4 text-main-brown">Fuelling You AND Your Daily Pursuits</h2>
                    <p className="mb-4 max-w-md">
                        "Let your inner health guru take a break. Our protein balls are brimming with delectable flavors, and they're free from any unpleasant additives. They're perfect for Keto, certified for Paleo, and entirely gluten-free!"          </p>
                    <button className="bg-main-red hover:bg-main-red text-white font-bold py-2 px-4 rounded text-3xl">
                        Shop All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnComponent;
