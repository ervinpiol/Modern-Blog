import React from "react";
import Transition from "../layouts/Transition";
import HomeSlider from "../components/Home/HomeSlider";
import FeaturedBlogs from "../components/Home/FeaturedBlogs";
import FeaturedPosts from "../common/FeaturedPosts";
import CTA from "../common/CTA";
import Category from "../common/Category";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <FeaturedBlogs />
      <FeaturedPosts />
      <Category isHome />
      <CTA />
    </>
  );
};

export default Transition(Home);
