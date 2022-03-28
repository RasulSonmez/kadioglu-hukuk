import React from "react";
//icon
import { MdFacebook } from "react-icons/md";
import { SiTwitter, SiLinkedin } from "react-icons/si";
//image
import teamImage1 from "../../assets/images/team-1.jpg";
import teamImage2 from "../../assets/images/team-2.jpg";
import teamImage3 from "../../assets/images/team-3.jpg";
import teamImage4 from "../../assets/images/team-4.jpg";
import teamImage5 from "../../assets/images/team-5.jpg";
//css
import "./TeamArea.scss";
const TeamArea = () => {
  return (
    <div className="teamArea section">
      <div className="section__title">
        <h3>Meet Our Experts</h3>
        <h1>Lawyers</h1>
      </div>
      <div className="teamArea__container container ">
        <div className="teamArea__wrapper grid">
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage5} alt="team-5" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage4} alt="team-4" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage3} alt="team-3" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage2} alt="team-2" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage1} alt="team-1" />
              </div>
              <div className="teamArea__content">
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
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
