import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GradientBottom from "../../common/GradientBottom";
import { blogsData } from "../../data/blogsData";
import RightArrow from "../../assets/icons/RightArrow.png";
import LeftArrow from "../../assets/icons/LeftArrow.png";

const HomeSlider = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="xl:w-[1440px] mx-auto glow ">
      <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-40 px-[5%] xl:px-0">
        <motion.button
          className="absolute md:left-8 xl:left-0 hidden md:flex items-center justify-center w-24 lg:w-40 h-24 lg:h-40 border rounded-full border-LightGrey z-[1]"
          onClick={() => slider.current.slickPrev()}
          initial={{ scale: 1, x: -200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 3 },
          }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LeftArrow} alt="LeftArrow" className="lg:w-14 md:w-10" />
        </motion.button>
        <AnimatePresence>
          <Slider ref={slider} {...settings} className="w-full">
            {blogsData.slice(0, 3).map((blog, i) => (
              <motion.div
                key={i}
                className="w-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 3 }}
              >
                <div className="md:w-3/4 lg:w-[70%] mx-auto h-[500px] relative">
                  <Link
                    to={`/blog/${blog.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex flex-col h-full overflow-hidden group rounded-3xl xl:rounded-l-3xl lg:flex-row"
                  >
                    <div className="h-full">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover w-full h-full transition-all duration-1000 ease-in-out rounded-l-3xl rounded-r-3xl lg:rounded-r-none group-hover:scale-110"
                      />
                      <div className="absolute z-10 flex flex-col items-center w-full -translate-x-1/2 md:translate-x-0 bottom-24 lg:bottom-8 md:left-8 md:items-start left-1/2 xl:w-auto">
                        <h2 className="w-4/5 text-center md:w-auto">
                          {blog.title}
                        </h2>
                        <div className="flex items-center gap-2 pt-2.5">
                          <img
                            src={blog.authorImage}
                            alt={blog.author}
                            className="w-8 rounded-full"
                          />
                          <p>{blog.author}</p>
                        </div>
                      </div>
                      <div className="absolute top-10 w-full text-end z-[2] right-8 lg:right-24">
                        <span className="px-3 py-1.5 rounded-md bg-Primary ">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="bg-BlueBlack lg:w-[120px] xl:h-full z-[1] flex justify-center items-center xl:rounded-r-3xl rounded-b-3xl lg:rounded-l-none py-5 xl:py-0">
                      <div className="flex gap-4 lg:rotate-90 whitespace-nowrap">
                        <p className="after:content-['•'] after:ml-4">
                          {blog.date}
                        </p>
                        <p>{blog.readTime} mins read</p>
                      </div>
                    </div>
                    <GradientBottom />
                  </Link>
                </div>
              </motion.div>
            ))}
          </Slider>
        </AnimatePresence>
        <motion.button
          className="absolute xl:right-0 md:right-8 hidden md:flex items-center justify-center w-24 lg:w-40 h-24 lg:h-40 border rounded-full border-LightGrey z-[1]"
          onClick={() => slider.current.slickNext()}
          initial={{ scale: 1, x: 200, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 3 },
          }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
        >
          <img src={RightArrow} alt="RightArrow" className="lg:w-14 md:w-10" />
        </motion.button>
      </div>
    </div>
  );
};

export default HomeSlider;
