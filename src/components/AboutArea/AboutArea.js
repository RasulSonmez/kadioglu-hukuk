import React from "react";
import { Link } from "react-router-dom";
//scss
import "./AboutArea.scss";
//image
import aboutAreaImage from "../../assets/images/about-img-1.jpg";

const AboutAreaArea = () => {
  return (
    <div className="aboutArea section">
      <div className="aboutArea__container grid container">
        <div className="aboutArea__image">
          <img src={aboutAreaImage} alt="aboutArea" />
        </div>
        <div className="aboutArea__content">
          <h1>About Us</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            cum sit cupiditate beatae consequuntur ipsa eum omnis voluptates
            quae, ea cumque eius excepturi,Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Deleniti cum sit cupiditate beatae
            consequuntur ipsa eum omnis voluptates quae, ea cumque eius
            excepturi,
          </p>
          <p>
            corrupti quam non necessitatibus facilis aspernatur neque soluta
            dignissimos animi magnam delectus et! Pariatur adipisci modi
            dolores. corrupti quam non necessitatibus facilis aspernatur neque
            soluta dignissimos animi magnam delectus et! Pariatur adipisci modi
            dolores
          </p>

          <Link to="/about" className="button button-primary">
            More About Us..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutAreaArea;
