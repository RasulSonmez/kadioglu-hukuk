import React from "react";
import TagsArea from "../TagsArea/TagsArea";
//css
import "./BlogPostArea.scss";
import BlogPostAreaCategory from "./BlogPostAreaCategory";
import BlogPostAreaNews from "./BlogPostAreaNews";
import BlogPostAreaRecentPost from "./BlogPostAreaRecentPost";
import BlogPostAreaSearch from "./BlogPostAreaSearch";

const BlogPostArea = () => {
  return (
    <div className="blogPostArea section">
      <div className="blogPostArea__container container">
        <div className="blogPostArea__content grid">
          <div className="blogPostArea__left">
            <BlogPostAreaSearch />
            <BlogPostAreaCategory />
            <BlogPostAreaRecentPost />
            <TagsArea />
          </div>
          <div className="blogPostArea__right">
            <BlogPostAreaNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostArea;
