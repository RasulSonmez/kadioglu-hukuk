import React from "react";
//css
import "./TagsArea.scss";

const TagsArea = () => {
  return (
    <div className="tags">
      <div className="tags__title">
        <h1>Tags</h1>
      </div>
      <ul>
        <li>
          <a href="#">Attorney</a>
        </li>
        <li>
          <a href="#">Lawyer</a>
        </li>
        <li>
          <a href="#">Accident</a>
        </li>
        <li>
          <a href="#">Consultation</a>
        </li>
        <li>
          <a href="#">Fraud</a>
        </li>
        <li>
          <a href="#">Law</a>
        </li>
        <li>
          <a href="#">Immigration</a>
        </li>
        <li>
          <a href="#">Criminal</a>
        </li>
        <li>
          <a href="#">Business</a>
        </li>
        <li>
          <a href="#">Corporate</a>
        </li>
      </ul>
    </div>
  );
};

export default TagsArea;
