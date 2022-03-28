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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="attorneysAreaArea section">
      <div className="attorneysArea__container">
        <div className="section__title">
          <h3>Meet Our Experts</h3>
          <h1>Attorneys</h1>
        </div>
        <div className="container">
          <Slider className="attorneysArea__slider" {...settingsTwo}>
            <div className="attorneysArea__item__wrapper">
              <div className="attorneysArea__item">
                <div className="attorneysArea__image">
                  <img src={teamImage5} alt="team-5" />
                </div>
                <div className="attorneysArea__content">
                  <h4>John Doe</h4>
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
                  <h4>Gunther Neeraj</h4>
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
                  <h4>Tsvetko Édgar</h4>
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
                  <h4>Ionuț Yosyp</h4>
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
                  <h4>Sinéad Erramun</h4>
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
