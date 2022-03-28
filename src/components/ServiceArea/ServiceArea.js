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
            <h3>Book Your</h3>
            <h1>Appointment</h1>
          </div>
        </div>
        <div className="serviceArea__item">
          <div className="serviceArea__icon">
            <GiSandsOfTime />
          </div>
          <div className="serviceArea__text">
            <h3>Get Free</h3>
            <h1>Expert Advice</h1>
          </div>
        </div>
        <div className="serviceArea__item">
          <div className="serviceArea__icon">
            <FiUsers />
          </div>
          <div className="serviceArea__text">
            <h3>You Can Easily</h3>
            <h1>Join Our Team</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
