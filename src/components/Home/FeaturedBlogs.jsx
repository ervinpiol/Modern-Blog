import React, { useState } from "react";
import { motion } from "framer-motion";

import { blogsData } from "../../data/blogsData";
import Blogs from "./Blogs/Blogs";
import Button from "./Blogs/Button";

const FeaturedBlogs = () => {
  const topTrending = blogsData.filter((blog) => blog.isTopTrending);
  const bottomTrending = blogsData.filter((blog) => blog.isBottomTrending);
  const topLatest = blogsData.filter((blog) => blog.isTopLatest);
  const bottomLatest = blogsData.filter((blog) => blog.isBottomLatest);

  const [selected, setSelected] = useState("trending");

  const blogs =
    selected === "trending"
      ? { top: topTrending, bottom: bottomTrending }
      : { top: topLatest, bottom: bottomLatest };

  return (
    <div>
      <motion.div
        className="xl:w-[1440px] mx-auto glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="xl:w-[90%] mx-auto flex justify-center items-center pt-28 flex-col gap-16 px-[5%] xl:px-[2.5%]">
          <Button selected={selected} setSelected={setSelected} />
          <Blogs blogs={blogs} />
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedBlogs;
