import React from "react";
import { Link } from "react-router-dom";
//slider
import Slider from "react-slick";
//scss
import "./Hero.scss";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} slick-hero-next`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={`${className} slick-hero-prev`} onClick={onClick} />;
}

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="hero">
      <div className="hero__slider-wrapper">
        <Slider className="hero__slider" {...settings}>
          <div>
            <div className="hero__slider__image-1"></div>
          </div>
          <div>
            <div className="hero__slider__image-2"></div>
          </div>
          <div>
            <div className="hero__slider__image-3"></div>
          </div>
          <div>
            <div className="hero__slider__image-4"></div>
          </div>
        </Slider>
        <div className="hero__slider__content">
          <p>Kadıoğlu Hukuk Bürosu</p>
          <h1>
            Avukatlık ve Hukuki Danışmanlık
            <br />
            İhtiyaçlarınız için Profesyonel Çözümler
          </h1>
          <Link to="/contact" className="button hero__button">
            İletişime Geçin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
