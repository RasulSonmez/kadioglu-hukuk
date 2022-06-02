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
        <h3>Uzmanlarımız</h3>
        <h1>Avukatlar</h1>
      </div>
      <div className="teamArea__container container ">
        <div className="teamArea__wrapper grid">
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage5} alt="team-5" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage4} alt="team-4" />
              </div>
              <div className="teamArea__content">
                <h4>Muhammed Ali Koyuncu</h4>
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage2} alt="team-2" />
              </div>
              <div className="teamArea__content">
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
          <div className="teamArea__item__wrapper">
            <div className="teamArea__item">
              <div className="teamArea__image">
                <img src={teamImage1} alt="team-1" />
              </div>
              <div className="teamArea__content">
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
        </div>
      </div>
    </div>
  );
};

export default TeamArea;
