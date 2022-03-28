import React from "react";
//css
import "./NewsLetterArea.scss";

const NewsLetterArea = () => {
  return (
    <div className="newsLetterArea section">
      <div className="newsLetterArea__container container">
        <div className="newsLetterArea__content">
          <h1>Subscribe Newsletter</h1>
          <form action="#">
            <input type="text" placeholder="Enter Your Email Address.." />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterArea;
