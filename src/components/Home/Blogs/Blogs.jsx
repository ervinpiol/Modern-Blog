import React from "react";
import BlogCard from "../../../common/BlogCard";

const Blogs = ({ blogs }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-8 md:gap-10 lg:gap-[1%] flex-col lg:flex-row">
        <BlogCard data={blogs.top} isGrid isFirst />
      </div>
      <div className="hidden gap-[1%] lg:flex">
        <BlogCard data={blogs.bottom} isGrid isThird />
      </div>
    </div>
  );
};

export default Blogs;
