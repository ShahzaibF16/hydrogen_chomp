import React, {Component} from 'react';
import Slider from 'react-slick';

export default class FlavorsVariantsSection extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      className: "center",
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="bg-main-brown pt-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8 pt-16">
          {/* Column 1 */}
          <div className='text-center max-w-5xl py-6 mx-auto'>
            <h1 className="text-7xl font-bold mb-4 text-white">
              Rolling Out PROTIEN in Every Flavor
            </h1>
            <p className="text-white text-2xl">
              Experience the rich decadence of our Classic protein balls. Packed
              with high-quality protein and a deep, velvety chocolate flavor,
              these balls are a treat for your tastebuds and your wellness.
            </p>
          </div>
          {/* Column 2 */}
          <div className=''>
            <Slider {...settings} >
              <div className=''>
                <img
                  src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/flavour_4_Custom.png?v=1690370594"
                  className='w-full'
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/flavour_3_Custom.png?v=1690370594"
                  className='w-full'
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/flavour_2_Custom.png?v=1690370595"
                  className='w-full'
                />
              </div>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/flavour_1_Custom.png?v=1690370595"
                  className='w-full'
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
