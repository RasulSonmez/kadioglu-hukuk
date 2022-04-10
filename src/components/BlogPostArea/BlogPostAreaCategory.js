import React from "react";
import { Link } from "react-router-dom";

const BlogPostAreaCategory = () => {
  return (
    <div className="blogPostArea__category">
      <div className="blogPostArea__category-title">
        <h1>Blog Category</h1>
      </div>
      <ul>
        <li>
          <Link to="#">Family Law</Link>
        </li>
        <li>
          <Link to="#">Criminal Law</Link>
        </li>
        <li>
          <Link to="#">Business Law</Link>
        </li>
        <li>
          <Link to="#">Personal Injury</Link>
        </li>
        <li>
          <Link to="#">Education Law</Link>
        </li>
        <li>
          <Link to="#">Drugs Crime</Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPostAreaCategory;
