import React, {Component} from 'react';
import Slider from 'react-slick';

export default class ClientsIconsSlider extends Component {
  render() {
    var settings = {
      nextArrow: false,
      prevArrow: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 5,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            infinite: true,
            nextArrow: false,
            prevArrow: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
            nextArrow: false,
            prevArrow: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="mt-24">
        <div className="bg-main-red py-4">
          <div className="container mx-auto px-6 max-w-7xl">
            <h1 className="text-white text-7xl text-center">
              See Us Roll in the Media
            </h1>
          </div>
        </div>
        <Slider {...settings} className="py-16">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/01.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/02.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/03.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/04.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/05.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/06.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/01.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/02.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/03.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/04.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/05.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/0261/5197/7009/files/06.png?v=1690364526"
              className="w-fit px-8"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
