import React from "react";
import { Link } from "react-router-dom";

import { categoriesData } from "../data/categoriesData";
import SectionTitle from "../common/SectionTitle";
import GradientBottom from "../common/GradientBottom";
import Transition from "../layouts/Transition";

const Categories = () => {
  const order = [
    "Technology",
    "Sustainability",
    "Nature",
    "Music",
    "Culture",
    "Business",
  ];

  const sortData = categoriesData.sort((a, b) => {
    const aIndex = order.indexOf(a.title);
    const bIndex = order.indexOf(b.title);
    return aIndex - bIndex;
  });

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto ">
        <div className="lg:w-4/5 xl:w-[90%] mx-auto relative flex justify-center items-center pt-40 flex-col xl:px-[10%] gap-12 px-[5%]">
          <SectionTitle title="All Categories" />
          <div className="flex flex-col pb-20 gap-7">
            {sortData.map((data, i) => (
              <Link
                to={`/categories/${data.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={i}
                className="xl:h-[500px] xl:w-[1000px]  group overflow-hidden rounded-3xl sticky top-0"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-3xl group-hover:scale-110"
                />
                <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-10 left-1/2 z-[1]">
                  <h2>{data.title}</h2>
                  <p className="text-center">{data.text}</p>
                </div>
                <GradientBottom />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Categories);
