import React from "react";
import { motion } from "framer-motion";

import Nature from "../../assets/portrait/Nature.jpg";
import Abstract from "../../assets/portrait/Abstract.jpg";
import Nature2 from "../../assets/portrait/Nature2.jpg";
import Astro from "../../assets/portrait/Astro.jpg";

const Intro = () => {
  const images = [Nature, Abstract, Nature2, Astro];

  return (
    <div>
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-56 flex-col gap-20 pb-12 px-[5%] xl:px-0">
          <motion.div
            className="flex flex-col items-center md:w-3/4 lg:w-1/2 xl:w-[42%] gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.75 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1>Pushing the the boundaries of the blogosphere</h1>
            <p className="text-center xl:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </motion.div>
          <div className="flex">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt="img"
                className={`object-cover w-[30%] md:w-1/4 h-[500px] rounded-3xl relative ${
                  i === 0 && "xl:left-[88px] -left-2 md:left-12"
                } ${
                  i === 1 &&
                  "xl:top-[76px] -left-8 xl:left-8 md:left-6 z-[1] top-20"
                } ${i === 2 && "xl:right-8 right-10 md:right-6 z-[2]"} ${
                  i === 3 &&
                  "xl:top-[76px] right-16 xl:right-[88px] z-[3] top-20 md:right-12"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
