import React from "react";
import CountUp from "react-countup";
//icon
import {
  MdOutlinePeople,
  MdListAlt,
  MdBarChart,
  MdOutlineBusinessCenter,
} from "react-icons/md";
//scss
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner section">
      <div className="banner__content container grid">
        <div className="banner__item">
          <div className="banner__title">
            <div className="banner__title-one">
              <MdOutlinePeople />
              <CountUp end={100} duration={5} />+
            </div>
            <p>Client Consultations</p>
          </div>
        </div>
        <div className="banner__item">
          <div className="banner__title">
            <div className="banner__title-one">
              <MdListAlt />
              <CountUp end={95} duration={5} />%
            </div>

            <p>Successful Cases</p>
          </div>
        </div>
        <div className="banner__item">
          <div className="banner__title">
            <div className="banner__title-one">
              <MdBarChart />
              <CountUp end={10} duration={5} /> mlns
            </div>

            <p>Recovered cost for clients</p>
          </div>
        </div>
        <div className="banner__item">
          <div className="banner__title">
            <div className="banner__title-one">
              <MdOutlineBusinessCenter />
              <CountUp end={30} duration={5} />+
            </div>
            <p>Professional Attorneys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
