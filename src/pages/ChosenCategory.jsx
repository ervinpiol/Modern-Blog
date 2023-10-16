import React from "react";
import { useParams } from "react-router-dom";

import { blogsData } from "../data/blogsData";
import Transition from "../layouts/Transition";
import SectionTitle from "../common/SectionTitle";
import Category from "../common/Category";
import BlogCard from "../common/BlogCard";

const ChosenCategory = () => {
  const { categoryName } = useParams();

  const categoryBlogs = blogsData.filter(
    (blog) => blog.category.toLowerCase() === categoryName
  );

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto pb-20">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-40 flex-col gap-12  px-[5%] xl:px-0">
          <SectionTitle
            title={`Post In ${
              categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
            }`}
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <BlogCard data={categoryBlogs} />
          </div>
        </div>
        <Category />
      </div>
    </div>
  );
};

export default Transition(ChosenCategory);
