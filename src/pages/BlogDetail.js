import React from "react";
import BlogPostAreaDetail from "../components/BlogPostArea/BlogPostAreaDetail";
import BreadcumbArea from "../components/BreadcumbArea/BreadcumbArea";
import BlogPostAreaCategory from "../components/BlogPostArea/BlogPostAreaCategory";
import BlogPostAreaRecentPost from "../components/BlogPostArea/BlogPostAreaRecentPost";
import BlogPostAreaSearch from "../components/BlogPostArea/BlogPostAreaSearch";
import NewsLetterArea from "../components/NewsLetterArea/NewsLetterArea";
import TagsArea from "../components/TagsArea/TagsArea";

const BlogDetail = () => {
  return (
    <>
      <BreadcumbArea />
      <div className="blogPostArea section">
        <div className="blogPostArea__container container">
          <div className="blogPostArea__content-detail grid">
            <div className="blogPostArea__left">
              <BlogPostAreaDetail />
            </div>
            <div className="blogPostArea__right">
              <BlogPostAreaSearch />
              <BlogPostAreaCategory />
              <BlogPostAreaRecentPost />
              <TagsArea />
            </div>
          </div>
        </div>
      </div>
      <NewsLetterArea />
    </>
  );
};

export default BlogDetail;
