import React, {Component} from 'react';
import Slider from 'react-slick';
import '../styles/app.css';

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#EA0020',
        padding: '10px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#EA0020',
        padding: '10px',
      }}
      onClick={onClick}
    />
  );
}

class TestimonialSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500,
      dots: true,
      accessibility: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="mb-16">
        <div className="bg-main-red py-4">
          <div className="container mx-auto px-6 max-w-7xl">
            <h1 className="text-white text-7xl text-center">
              OUR CUSTOMERS HAVE THE BALL
            </h1>
          </div>
        </div>
        <Slider {...settings} className="pt-16">
          {/* Slide-1 */}
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                Our players LOVE simplyFUEL Protein Balls! They are super
                delicious and the perfect high quality snack to help fuel the
                guys for the crazy demands of our sport and schedule.
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">
                KRISTEN ANDREWS, MS, RDN, CSSD, TEAM SPORTS NUTRITIONIST FOR THE
                LOS ANGELES LAKERS
              </h2>
            </div>
          </div>
          {/* Slide-2 */}
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                Fantastic! Our athletes have absolutely LOVED the simplyFUEL
                protein balls! They taste amazing and provide such high quality
                ingredients and nutrients. Thank you for making such a fantastic
                product
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">
                RACHEL HIGGINSON, BYU SPORTS DIETITIAN
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                Absolutely AMAZING!!! My family crushed 3 bags in 4days!!!
                Highly recommend
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">
                NICOLE BOXX
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                I bought these at Costco and they were so good I came to their
                site immediately to restock and buy more flavors. I am a type 1
                Diabetic and this has the exact nutritional profile I need to
                bring my blood sugar up when it is low....without eating junk.
                Thank you, thank you!
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">H.P.</h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                I have been making homemade peanut butter protein bites for
                years, but it can be time-consuming and costly to make them from
                scratch each week. I have finally found a product that I
                enjoy the taste just as much as my homemade bites, plus has way
                better nutritional value than I’ve managed to concoct on my own.
                So grateful that this product exists! Thank you! 🫶
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">J.</h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-24">
            <div className="bg-white rounded-lg p-8 max-w-md shadow-xl border-4 border-main-red h-132">
              <p className="text-center text-main-brown mb-12 text-xl pt-4">
                We tried all flavors and they have great texture, yummy. They
                could be a little less sweet, since it is not a dessert but a
                performance fuel. I wish there were varieties without peanut
                butter, or at least organic version - the worst of all nut
                butters, mold issues, pesticides, allergies, just to name a few.
                Also more protein would be wonderful
              </p>
              <div className="flex items-center justify-center mb-2 py-2">
                <span className="text-yellow-500 text-lg">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
              <h2 className="text-2xl mb-2 text-center text-main-red">ELENA</h2>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default TestimonialSlider;
