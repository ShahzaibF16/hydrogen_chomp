import React from "react";
const NewSection = () => {
    return (
    <>
    <div className="bg-curve-hero bg-bottom	bg-no-repeat bg-contain">
      <div className="flex flex-col items-center justify-center max-w-4xl px-4 pt-9 mx-auto sm:max-w-xl md:max-w-6xl lg:pt-4 md:px-8">
        <div className="max-w-xl mb-2 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
          <h1 className="mb-2 mt-9 text-8xl font-bold leading-none tracking-tight md:mx-auto text-main-red">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                  width="52"
                  height="24"
                />
              </svg>
              {/* <span className="relative">SIMPLY</span> */}
            </span>{' '}
               SIMPLY DELICIOUS
          </h1>
        </div>
        <button
            type="submit"
            className="inline-flex items-center text-white justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 shadow-md md:w-auto hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none py-4 bg-main-red rounded-lg font-bold text-3xl drop-shadow-xl"
          >
            Shop Now
          </button>
        <img
          src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/banner_fronts.png?v=1689082420"
          className="w-full mx-auto md:w-full"
          alt=""
        />
      </div>
      {/* <svg className="fill-current text-blue-sky" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L60,218.7C120,181,240,107,360,64C480,21,600,11,720,16C840,21,960,43,1080,74.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
    </div>
    {/* // NewExp */}
    <div className="bg-blue-sky overflow-hidden">
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
    </>
    );
  };


export default NewSection;