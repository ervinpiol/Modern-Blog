import React from "react";
import FeaturedPosts from "../common/FeaturedPosts";
import FeaturedBlogs from "../components/Home/FeaturedBlogs";
import AllPosts from "../components/Blog/AllPosts";
import Category from "../common/Category";
import Transition from "../layouts/Transition";

const Blog = () => {
  return (
    <>
      <AllPosts />
      <Category />
      <FeaturedPosts />
      <FeaturedBlogs />
    </>
  );
};

export default Transition(Blog);
