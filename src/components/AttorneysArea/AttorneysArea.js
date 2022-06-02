import React from "react";
import Slider from "react-slick";
//icon
import { MdFacebook } from "react-icons/md";
import { SiTwitter, SiLinkedin } from "react-icons/si";
//image
import teamImage1 from "../../assets/images/team-1.jpg";
import teamImage2 from "../../assets/images/team-2.jpg";
import teamImage3 from "../../assets/images/team-3.jpg";
import teamImage4 from "../../assets/images/team-4.jpg";
import teamImage5 from "../../assets/images/team-5.jpg";
//scss
import "./AttorneysArea.scss";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-attorneysArea-next`}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} slick-attorneysArea-prev`}
      onClick={onClick}
    />
  );
}

const AttorneysArea = () => {
  const settingsTwo = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 967,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
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
    <div className="attorneysArea section">
      <div className="attorneysArea__container">
        <div className="section__title">
          <h3>Uzmanlarımız</h3>
          <h1>Avukatlar</h1>
        </div>
        <div className="container">
          <Slider className="attorneysArea__slider" {...settingsTwo}>
            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage5} alt="team-5" />
                </div>
                <div className="attorneysArea__content">
                  <h4>Sancak Sancaktar Oduncu</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <MdFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <SiTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage4} alt="team-4" />
                </div>
                <div className="attorneysArea__content">
                  <h4>Muhammed Ali Koyuncu team-3</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <MdFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <SiTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage3} alt="team-3" />
                </div>
                <div className="attorneysArea__content">
                  <h4>Mehmet Emin Uzman Çavuşoğlu</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <MdFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <SiTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage2} alt="team-2" />
                </div>
                <div className="attorneysArea__content">
                  <h4>Halit Erdem Dermiryolu</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <MdFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <SiTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage1} alt="team-1" />
                </div>
                <div className="attorneysArea__content">
                  <h4>Altay Timur</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <MdFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <SiTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <SiLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AttorneysArea;
