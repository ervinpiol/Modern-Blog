import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { blogsData } from "../data/blogsData";
import GradientBottom from "./GradientBottom";
import SectionTitle from "./SectionTitle";

const FeaturedPosts = () => {
  const featuredData = blogsData.filter((blog) => blog.isFeatured);

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[90%] mx-auto flex justify-center flex-col gap-10 items-start mt-32 px-[5%] xl:px-0">
          <SectionTitle title="Featured Posts" isSolo />
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {featuredData.map((feature, i) => (
              <Link
                to={`/blog/${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={i}
                className="xl:h-[500px] flex flex-col lg:flex-row"
              >
                <div className="lg:w-[780px] xl:w-[920px] xl:h-[500px] relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full lg:rounded-l-3xl rounded-t-3xl lg:rounded-r-none"
                  />
                  <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[1]  whitespace-nowrap">
                    {feature.title}
                  </h2>
                  <GradientBottom left />
                </div>
                <div className="relative flex flex-col justify-between flex-1 h-full px-10 pt-20 pb-8 bg-Primary rounded-b-3xl lg:rounded-bl-none lg:rounded-r-3xl">
                  <span className="absolute px-3 py-1 -translate-x-1/2 rounded-md left-1/2 lg:left-0 top-7 gradient-blue">
                    {feature.category}
                  </span>
                  <div className="h-[300px] relative overflow-hidden">
                    <motion.p
                      initial={{ y: "50%" }}
                      animate={{ y: "-100%" }}
                      transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                      }}
                      className="ease-in-out"
                    >
                      {feature.details.map((detail) => detail.pText).join(" ")}
                    </motion.p>
                    <div className="text-bottom-gradient absolute z-[1] inset-0" />
                  </div>
                  <div className="flex flex-col items-center justify-center xl:block md:pb-5 lg:items-start lg:pb-0">
                    <div className="flex gap-2.5 items-center">
                      <img
                        src={feature.authorImage}
                        alt={feature.author}
                        className="w-8 rounded-full"
                      />
                      <p>{feature.author}</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <p className="after:content-['•'] after:ml-2">
                        {feature.date}
                      </p>
                      <p>{feature.readTime} mins read</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
