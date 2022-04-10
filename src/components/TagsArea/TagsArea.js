import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="#">Attorney</Link>
        </li>
        <li>
          <Link to="#">Lawyer</Link>
        </li>
        <li>
          <Link to="#">Accident</Link>
        </li>
        <li>
          <Link to="#">Consultation</Link>
        </li>
        <li>
          <Link to="#">Fraud</Link>
        </li>
        <li>
          <Link to="#">Law</Link>
        </li>
        <li>
          <Link to="#">Immigration</Link>
        </li>
        <li>
          <Link to="#">Criminal</Link>
        </li>
        <li>
          <Link to="#">Business</Link>
        </li>
        <li>
          <Link to="#">Corporate</Link>
        </li>
      </ul>
    </div>
  );
};

export default TagsArea;
