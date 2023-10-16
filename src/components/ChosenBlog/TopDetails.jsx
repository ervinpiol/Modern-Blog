import React from "react";
import { motion } from "framer-motion";

const TopDetails = ({ blog }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.75 }}
    >
      <span className="px-5 py-2 text-sm rounded-full bg-Primary">
        {blog.category}
      </span>
      <h2 className="pt-4">{blog.title}</h2>
      <p className="pt-4 w-4/5 lg:w-[420px] text-center">{blog.text}</p>
      <p className="pt-4 text-sm text-white">{blog.openDate}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="mt-14 rounded-3xl h-[480px] object-cover"
      />
    </motion.div>
  );
};

export default TopDetails;
