import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { categoriesData } from "../data/categoriesData";
import GradientBottom from "./GradientBottom";
import SectionTitle from "./SectionTitle";

const Category = ({ isHome }) => {
  const featuredData = categoriesData
    .filter((data) => data.isFeatured)
    .sort((a, b) => a.title.localeCompare(b.title));

  const datas = isHome ? featuredData : categoriesData;

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto glow">
        <div
          className={`xl:w-[90%] mx-auto flex justify-center flex-col gap-10 items-start mt-32 ${
            isHome ? "px-[5%] xl:px-[2.5%]" : "px-[5%] xl:px-0"
          }`}
        >
          <SectionTitle
            title={isHome ? "Featured Categories" : "Categories"}
            isSolo={isHome}
          />
          <motion.div
            className={`grid w-full gap-4 ${
              isHome ? "grid-cols-1 md:grid-cols-2" : "lg:grid-cols-3"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {datas.map((category, i) => (
              <Link
                to={`/categories/${category.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={i}
                className="relative h-[200px] group overflow-hidden rounded-3xl"
              >
                <div className="h-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-3xl group-hover:scale-110"
                  />
                </div>
                <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-8 left-1/2 z-[1]">
                  <h3>{category.title}</h3>
                  <p className="text-center">{category.text}</p>
                </div>
                <GradientBottom />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Category;
