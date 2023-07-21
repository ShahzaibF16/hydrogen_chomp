import React from 'react';
import '../styles/custom-style.css'

const ScrollingSection = ({ text }) => {
    return (
      <div className="bg-main-red py-4">
        <div className="container mx-auto px-0">
          <div className="flex items-center">
            <h1 className="text-6xl md:text-6xl whitespace-nowrap mr-4 text-white animate-scroll">
              {text}
            </h1>
          </div>
        </div>
      </div>
    );
  };

export default ScrollingSection;
