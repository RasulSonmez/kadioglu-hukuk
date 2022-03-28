import React from "react";
import { Link } from "react-router-dom";
//image
import blog1 from "../../assets/images/blog-1.jpg";
import blog2 from "../../assets/images/blog-2.jpg";
import blog3 from "../../assets/images/blog-3.jpg";
import teamImage5 from "../../assets/images/team-5.jpg";

const BlogPostAreaNews = () => {
  return (
    <div>
      {" "}
      <div className="blogPostArea__news__item grid">
        <div className="blogPostArea__news__image">
          <img src={blog1} alt="blog-img" />
        </div>

        <div className="blogPostArea__news__meta">
          <ul>
            <li>
              <img src={teamImage5} alt="blog-img" />
            </li>
            <li>By John Doe</li>
            <li>03/03/2022</li>
          </ul>
        </div>
        <h1>Justice May For You If You Are Innocent</h1>
        <div className="blogPostArea__news-sub">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            numquam delectus rerum consectetur libero, expedita unde voluptatum
            nesciunt amet harum architecto blanditiis temporibus quae quas
            adipisci placeat animi. Magnam, deserunt.
          </p>
          <Link to="/blogdetail">Read More..</Link>
        </div>
      </div>
      <div className="blogPostArea__news__item grid">
        <div className="blogPostArea__news__image">
          <img src={blog2} alt="blog-img" />
        </div>

        <div className="blogPostArea__news__meta">
          <ul>
            <li>
              <img src={teamImage5} alt="blog-img" />
            </li>
            <li>By John Doe</li>
            <li>03/03/2022</li>
          </ul>
        </div>
        <h1>Justice May For You If You Are Innocent</h1>
        <div className="blogPostArea__news-sub">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            numquam delectus rerum consectetur libero, expedita unde voluptatum
            nesciunt amet harum architecto blanditiis temporibus quae quas
            adipisci placeat animi. Magnam, deserunt.
          </p>
          <a href="#">Read More..</a>
        </div>
      </div>
      <div className="blogPostArea__news__item grid">
        <div className="blogPostArea__news__image">
          <img src={blog3} alt="blog-img" />
        </div>

        <div className="blogPostArea__news__meta">
          <ul>
            <li>
              <img src={teamImage5} alt="blog-img" />
            </li>
            <li>By John Doe</li>
            <li>03/03/2022</li>
          </ul>
        </div>
        <h1>Justice May For You If You Are Innocent</h1>
        <div className="blogPostArea__news-sub">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            numquam delectus rerum consectetur libero, expedita unde voluptatum
            nesciunt amet harum architecto blanditiis temporibus quae quas
            adipisci placeat animi. Magnam, deserunt.
          </p>
          <a href="#">Read More..</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostAreaNews;
