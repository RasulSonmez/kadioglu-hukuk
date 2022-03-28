import React from "react";
//icon
import { FiUser, FiUsers, FiAward } from "react-icons/fi";
import {
  MdBusinessCenter,
  MdCastForEducation,
  MdRealEstateAgent,
} from "react-icons/md";
//scss
import "./PracticeArea.scss";

const PracticeArea = () => {
  return (
    <div className="practiceArea section">
      <div className="practiceArea__container container">
        <div className="section__title">
          <h3>Area Of practiceArea</h3>
          <h1>How Can Help You</h1>
        </div>
        <div className="practiceArea__content grid">
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiUsers />
            </div>
            <div className="practiceArea__text">
              <h1>Family Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiUser />
            </div>
            <div className="practiceArea__text">
              <h1>Personal Injury</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdBusinessCenter />
            </div>
            <div className="practiceArea__text">
              <h1>Business Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <FiAward />
            </div>
            <div className="practiceArea__text">
              <h1>Criminal Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdCastForEducation />
            </div>
            <div className="practiceArea__text">
              <h1>Education Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
          <div className="practiceArea__item">
            <div className="practiceArea__icon">
              <MdRealEstateAgent />
            </div>
            <div className="practiceArea__text">
              <h1>Real Estate Law</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
                at iusto ut necessitatibus adipisci explicabo, corrupti eius
                tempora velit aspernatur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
