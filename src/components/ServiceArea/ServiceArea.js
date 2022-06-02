import React from "react";
//icon
import { FiUser, FiUsers } from "react-icons/fi";
import { GiSandsOfTime } from "react-icons/gi";
//scss
import "./ServiceArea.scss";
const ServiceArea = () => {
  return (
    <div className="serviceArea section">
      <div className="serviceArea__content container grid">
        <div className="serviceArea__item">
          <div className="serviceArea__icon">
            <FiUser />
          </div>
          <div className="serviceArea__text">
            <h3>Yerinizi Ayırtın</h3>
            <h1>Randevu Alın</h1>
          </div>
        </div>
        <div className="serviceArea__item">
          <div className="serviceArea__icon">
            <GiSandsOfTime />
          </div>
          <div className="serviceArea__text">
            <h3>Tecrübeli</h3>
            <h1>Uzman Tavsiyesi</h1>
          </div>
        </div>
        <div className="serviceArea__item">
          <div className="serviceArea__icon">
            <FiUsers />
          </div>
          <div className="serviceArea__text">
            <h3>Hukuki Danışmanlık</h3>
            <h1>Dava Takibi</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
