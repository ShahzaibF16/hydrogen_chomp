import React from 'react';
import ScrollingSection from './ScrollingTextSection';

const ImagesIconsColumn = () => {
  return (
    <section className="bg-transparent">
        <ScrollingSection text="AT COSTA STORES in texasouisiana, Oklahoma, and Nevada, 30 Bay Area locations"/>
      <div className="mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4 py-8 bg-blue-sky">
            <div className="flex flex-col items-center">
              {/* Row 1 */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/2580869b30a62901aa1157dcdefef8fa.png?v=1689944738"
                    alt="Icon"
                  />
                </div>
                <h2 className="text-main-brown font-semibold text-2xl">
                  PREMIUM NUTRITION, SIMPLIFIED
                </h2>
                <p className="text-main-brown text-center max-w-md">
                  Simply Fuel - a harmonious blend of superior nutrition and
                  delectable taste. Our protein balls offer compact nutrients,
                  supporting muscle recovery, and keeping hunger at bay with low
                  sugar."
                </p>
              </div>
              {/* Row 2 */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/2580869b30a62901aa1157dcdefef8fa.png?v=1689944738"
                    alt="Icon"
                  />
                </div>
                <h2 className="text-main-brown font-semibold text-2xl">Perfect for Every Lifestyle</h2>
                <p className="text-main-brown text-center max-w-md">Tailored to all diets - Paleo, Keto, or Gluten-free, Simply Fuel is the answer to healthier snacking. Natural ingredients, fiber-rich, and free from gluten or added sugars.</p>
              </div>
              {/* Row 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-2">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/27f7d957a6fc683eaa01491ebc4c8e8a.png?v=1689944738"
                    alt="Icon"
                  />
                </div>
                <h2 className="text-main-brown font-semibold text-2xl">Flavors That Delight</h2>
                <p className="text-main-brown text-center max-w-md">Nutrition without sacrificing flavor. With an array of taste-tempting variants, Simply Fuel ensures a wholesome snack that dances with your taste buds.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 max-h-full">
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/95dc14dd43bfa583758c0c83d15179b4.png?v=1689944114"
              alt="Full Width Image"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesIconsColumn;
