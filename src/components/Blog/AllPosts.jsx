import React, { useState } from "react";

import { blogsData } from "../../data/blogsData";
import SectionTitle from "../../common/SectionTitle";
import BlogCard from "../../common/BlogCard";

const AllPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 4;
  const totalPages = Math.ceil(blogsData.length / postsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-40 flex-col px-[5%] xl:px-0">
          <SectionTitle title="All Posts" />
          <div className="grid gap-4 pt-10 lg:grid-cols-2">
            <BlogCard
              data={blogsData}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </div>
          <div className="flex gap-4 mt-10">
            {currentPage > 1 && (
              <button
                className="px-8 py-2 rounded-full bg-Primary"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {currentPage < totalPages && (
              <button
                className="px-8 py-2 rounded-full bg-Primary"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
