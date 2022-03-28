import React from "react";
import Slider from "react-slick";
//icon
import { ImQuotesLeft } from "react-icons/im";
//image
import testmonialImage from "../../assets/images/testmonial-img.jpg";
import testmonialAvatar from "../../assets/images/testmonial-avatar.jpg";
//css
import "./TestmonialArea.scss";

const TestmonialArea = () => {
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          bottom: "150px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="testmonialArea section">
      <div className="testmonialArea__container container">
        <div className="testmonialArea__content grid">
          <div className="testmonialArea__item">
            <div className="testmonialArea__image">
              <img src={testmonialImage} alt="testmonial-img" />
            </div>
          </div>

          <div className="testmonialArea__itemSlider grid">
            <div className="testmonialArea__title">
              <h4>What People Say</h4>
              <h1>Client Testimonial</h1>
            </div>

            <Slider className="testmonialArea__slider" {...settings3}>
              <div className="testmonialArea__slider__item">
                <p>
                  <ImQuotesLeft color="var(--color-gold)" /> &nbsp; Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Enim,
                  consequatur! Dignissimos, facilis doloribus perferendis quae
                  amet recusandae consequatur iure sint.
                </p>
                <div className="testmonialArea__slider__content">
                  <div className="testmonialArea__slider__item-thumbImg">
                    <img src={testmonialAvatar} alt="testmonial-avatar" />
                  </div>
                  <div className="testmonialArea__slider__item-content">
                    <h4>Clara John Doe</h4>
                    <span>CEO of American BDS</span>
                  </div>
                </div>
              </div>
              <div className="testmonialArea__slider__item">
                <p>
                  <ImQuotesLeft color="var(--color-gold)" /> &nbsp; Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Enim,
                  consequatur! Dignissimos, facilis doloribus perferendis quae
                  amet recusandae consequatur iure sint.
                </p>
                <div className="testmonialArea__slider__content">
                  <div className="testmonialArea__slider__item-thumbImg">
                    <img src={testmonialAvatar} alt="testmonial-avatar" />
                  </div>
                  <div className="testmonialArea__slider__item-content">
                    <h4>Clara John Doe</h4>
                    <span>CEO of American BDS</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialArea;
