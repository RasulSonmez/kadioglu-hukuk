import React from "react";
//image
import blogImage1 from "../../assets/images/blog-1.jpg";
import blogImage2 from "../../assets/images/blog-2.jpg";
import blogImage3 from "../../assets/images/blog-3.jpg";

const BlogPostAreaRecentPost = () => {
  return (
    <div className="blogPostArea__recentPost">
      <div className="blogPostArea__recentPost-title">
        <h1>Recent Post</h1>
      </div>
      <ul>
        <li>
          <a href="#">
            <img src={blogImage1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={blogImage2} alt="" />
            <p>Justice May For You If You Are Innocent</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={blogImage3} alt="" />
            <p>Justice May For You If You Are Innocent</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPostAreaRecentPost;
