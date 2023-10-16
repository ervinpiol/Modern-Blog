import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import GradientBottom from "./GradientBottom";
import Line from "./Line";

const BlogCard = ({ data, isGrid, startIndex, endIndex, isFirst, isThird }) => {
  const [isHovered, setIsHovered] = useState();

  useEffect(() => {
    if (isFirst) {
      setIsHovered(1);
    } else if (isThird) {
      setIsHovered(6);
    }
  }, []);

  const slicedData = data.slice(startIndex, endIndex);

  return (
    <>
      {slicedData.map((item, i) => (
        <Link
          key={i}
          to={`/blog/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
          className={`h-[500px] relative transition-all duration-1000 ease-in-out overflow-hidden group rounded-3xl ${
            isGrid && "lg:w-[26%]"
          } ${isGrid && item.id === isHovered && "lg:w-[46%]"}`}
          onMouseEnter={() => setIsHovered(item.id)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="object-cover h-full transition-all duration-1000 ease-in-out rounded-3xl group-hover:scale-110"
          />
          <>
            <div className="absolute top-0 w-full p-8 text-end">
              <span className="px-3 py-1 rounded-md bg-Primary ">
                {item.category}
              </span>
            </div>
            {(window.innerWidth >= 1024
              ? item.id === isHovered || !isGrid
              : true) && (
              <div className="absolute flex flex-col items-center md:items-end w-full p-8 bottom-0 z-[1]">
                <div className="flex flex-col items-center w-full gap-2">
                  <div className="flex flex-col items-center justify-between w-full gap-2 md:flex-row">
                    <h3 className="whitespace-nowrap">{item.title}</h3>
                    <div className="flex gap-2.5 items-center">
                      <img
                        src={item.authorImage}
                        alt={item.author}
                        className="w-8 rounded-full"
                      />
                      <p className="whitespace-nowrap">{item.author}</p>
                    </div>
                  </div>
                  <Line isGrid />
                </div>
                <div className="flex gap-2 pt-5">
                  <p className="after:content-['•'] after:ml-2">{item.date}</p>
                  <p>{item.readTime} mins read</p>
                </div>
              </div>
            )}
            <GradientBottom />
          </>
        </Link>
      ))}
    </>
  );
};

export default BlogCard;
