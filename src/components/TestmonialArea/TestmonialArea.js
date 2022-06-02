import React from "react";
import Slider from "react-slick";
//icon
import { ImQuotesLeft } from "react-icons/im";
//image
import testmonialImage from "../../assets/images/testmonial-img.jpg";
import testmonialAvatar from "../../assets/images/testmonial-avatar.jpg";
import testmonialAvatar2 from "../../assets/images/team-1.jpg";
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
              <h4>
                Görüşlerinizi Bizlere Bildirdiğiniz Için Teşekkür Ediyoruz
              </h4>
              <h1>Mutlu Müvekkillerimiz</h1>
            </div>

            <Slider className="testmonialArea__slider" {...settings3}>
              <div className="testmonialArea__slider__item">
                <p>
                  <ImQuotesLeft color="var(--color-gold)" /> &nbsp; Gercekten
                  ilgiliniz ve alakaniz icin tesekkurler mesajlara geri donup
                  bilgi verdiginiz icin gercekten tesekkur ederim.
                </p>
                <div className="testmonialArea__slider__content">
                  <div className="testmonialArea__slider__item-thumbImg">
                    <img src={testmonialAvatar} alt="testmonial-avatar" />
                  </div>
                  <div className="testmonialArea__slider__item-content">
                    <h4>Ayşe Sevcan Yılmazlar</h4>
                  </div>
                </div>
              </div>
              <div className="testmonialArea__slider__item">
                <p>
                  <ImQuotesLeft color="var(--color-gold)" /> &nbsp; Verdiğiniz
                  bilgiler için çok teşekkür ederim. Alanında başarılı ve ilgili
                  bir avukatlar.
                </p>
                <div className="testmonialArea__slider__content">
                  <div className="testmonialArea__slider__item-thumbImg">
                    <img src={testmonialAvatar2} alt="testmonial-avatar" />
                  </div>
                  <div className="testmonialArea__slider__item-content">
                    <h4>Ali Yılmaz Koçlu</h4>
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
