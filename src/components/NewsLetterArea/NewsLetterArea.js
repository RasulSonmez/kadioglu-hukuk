import React from "react";
//css
import "./NewsLetterArea.scss";

const NewsLetterArea = () => {
  return (
    <div className="newsLetterArea section">
      <div className="newsLetterArea__container container">
        <div className="newsLetterArea__content">
          <h1>Mail Aboneliği</h1>
          <form action="#">
            <input type="text" placeholder="Email Adresi" />
            <button>Abone Ol!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterArea;
