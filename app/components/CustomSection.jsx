import React, {useState} from 'react';

const CustomSection = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const images = [
  //   'https://cdn.shopify.com/s/files/1/0261/5197/7009/products/1CH1488.png?v=1660283485',
  //   'https://cdn.shopify.com/s/files/1/0261/5197/7009/products/1CH1152.png?v=1660289303',
  //   'https://cdn.shopify.com/s/files/1/0261/5197/7009/products/1CH1501.png?v=1660226635',
  //   'https://cdn.shopify.com/s/files/1/0261/5197/7009/products/1CH1498.png?v=1660226372',
  //   'https://cdn.shopify.com/s/files/1/0261/5197/7009/products/1CH1516.png?v=1660135949',
  // ];

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === images.length - 1 ? 0 : prevSlide + 1,
  //   );
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) =>
  //     prevSlide === 0 ? images.length - 1 : prevSlide - 1,
  //   );
  // };

  return (
    <div className="mx-auto px-4 py-9 bg-main-brown">
      <div className="flex flex-col items-center sm:max-w-xl max-w-4xl text-center mx-auto">
        <h1 className="text-8xl md:text-7xl mt-9 text-center mb-4 text-white font-bold">
          MEET the Round Delight!
        </h1>
        <p className="text-lg text-center mb-6 px-9 text-white">
          Let's keep it simple: absolutely no sugar, loaded with protein, and
          available in a variety of tantalizing flavors. Nutrition that's not
          just good for you, but also a delight to your palate.
        </p>
        <button className="bg-main-red hover:bg-main-red text-white font-bold py-2 px-4 rounded mb-6 text-3xl">
          Shop All
        </button>
      </div>
      {/* <div className="bg-main-brown py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="flex flex-row justify-center space-x-4 mb-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-1/3 rounded-lg ${
                    index === currentSlide ? 'border-4 border-blue-500' : ''
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <div className="flex justify-center">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-r-lg shadow"
              onClick={handlePrevSlide}
            >
              Prev
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-800 text-white rounded-l-lg shadow"
              onClick={handleNextSlide}
            >
              Next
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CustomSection;
