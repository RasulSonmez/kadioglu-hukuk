import React from "react";
import BlogPostArea from "../components/BlogPostArea/BlogPostArea";
import BreadcumbArea from "../components/BreadcumbArea/BreadcumbArea";
import NewsLetterArea from "../components/NewsLetterArea/NewsLetterArea";

const Blog = () => {
  return (
    <>
      <BreadcumbArea />
      <BlogPostArea />
      <NewsLetterArea />
    </>
  );
};

export default Blog;
