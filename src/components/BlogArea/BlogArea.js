import React from "react";
import { Link } from "react-router-dom";
//image
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import teamImage5 from "../../assets/images/team-5.jpg";
//scss
import "./BlogArea.scss";

const BlogArea = () => {
  return (
    <div className="blogArea section">
      <div className="blogArea__container container">
        <div className="section__title">
          <h3>From Our Blog</h3>
          <h1>Latest News</h1>
        </div>
        <div className="blogArea__content grid">
          <div className="blogArea__item grid">
            <div className="blogArea__image">
              <img src={blog1} alt="blog-img" />
            </div>
            <h1>Justice May For You If You Are Innocent</h1>
            <div className="blogArea__meta">
              <ul>
                <li>
                  <img src={teamImage5} alt="blog-img" />
                </li>
                <li>By John Doe</li>
                <li>03/03/2022</li>
              </ul>
            </div>
          </div>
          <div className="blogArea__item grid">
            <div className="blogArea__image">
              <img src={blog2} alt="blog-img" />
            </div>
            <h1>Justice May For You If You Are Innocent</h1>
            <div className="blogArea__meta">
              <ul>
                <li>
                  <img src={teamImage5} alt="blog-img" />
                </li>
                <li>By John Doe</li>
                <li>03/03/2022</li>
              </ul>
            </div>
          </div>
          <div className="blogArea__item grid">
            <div className="blogArea__image">
              <img src={blog3} alt="blog-img" />
            </div>
            <h1>Justice May For You If You Are Innocent</h1>
            <div className="blogArea__meta">
              <ul>
                <li>
                  <img src={teamImage5} alt="blog-img" />
                </li>
                <li>By John Doe</li>
                <li>03/03/2022</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blogArea__readmore">
          <Link to="/blog">All Latest News..</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
