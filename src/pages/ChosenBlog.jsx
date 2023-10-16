import React from "react";
import { useParams } from "react-router-dom";

import { blogsData } from "../data/blogsData";
import BottomDetails from "../components/ChosenBlog/BottomDetails";
import TopDetails from "../components/ChosenBlog/TopDetails";
import Transition from "../layouts/Transition";

const ChosenBlog = () => {
  const { blogName } = useParams();

  const blog = blogsData.find(
    (b) => b.title.toLowerCase().replace(/\s+/g, "-") === blogName
  );

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-40 xl:px-[10%] flex-col pb-20 px-[5%]">
          <TopDetails blog={blog} />
          <BottomDetails blog={blog} />
        </div>
      </div>
    </div>
  );
};

export default Transition(ChosenBlog);
