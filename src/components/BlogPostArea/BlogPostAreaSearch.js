import React from "react";
//icon
import { FiSearch } from "react-icons/fi";

const BlogPostAreaSearch = () => {
  return (
    <div className="blogPostArea__search">
      <input type="search" placeholder="search.." />
      <FiSearch className="blogPostArea__search-icon" />
    </div>
  );
};

export default BlogPostAreaSearch;
