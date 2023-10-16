import React from "react";
import { motion } from "framer-motion";

import SectionTitle from "../../common/SectionTitle";
import GradientBottom from "../../common/GradientBottom";
import Tech from "../../assets/blogs/Tech.jpg";
import Culture from "../../assets/blogs/Culture.jpg";
import Business from "../../assets/blogs/Business.jpg";

const OurValues = () => {
  const ourValuesData = [
    {
      title: "Exportation",
      image: Tech,
    },
    {
      title: "Diversity",
      image: Culture,
    },
    {
      title: "Innovation",
      image: Business,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-28 flex-col gap-16 px-[10%] mt-5">
          <SectionTitle title="Our Values" isSolo />
          <div className="flex flex-col gap-7">
            {ourValuesData.map((value, i) => (
              <div
                key={i}
                className="flex flex-col md:grid grid-rows-1 lg:grid-cols-[.25fr_.6fr_1.5fr] md:grid-cols-[.5fr_1fr_1.5fr] md:h-[200px] bg-DarkBlue rounded-3xl overflow-hidden"
              >
                <div className="flex items-center justify-center">
                  <span className="w-[60px] h-[60px] bg-DarkBlue right-gradient rounded-full flex justify-center items-center">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col justify-center h-full p-8 top-gradient bg-BlueBlack xl:rounded-l-3xl">
                  <h3>{value.title}</h3>
                  <p>Lorem ipsum dolor sit amet et justo cursus.</p>
                </div>
                <div className="relative">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="object-cover w-full h-full rounded-r-3xl"
                  />
                  <GradientBottom notRounded />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurValues;
