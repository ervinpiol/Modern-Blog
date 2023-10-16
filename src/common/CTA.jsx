import React, { useState } from "react";
import { motion } from "framer-motion";

import GradientBottom from "./GradientBottom";
import RightArrow from "../assets/icons/arrow-right-icon.svg";

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="py-24 mt-8 xl:w-[1440px] mx-auto glow px-[5%] xl:px-0">
        <div className="xl:w-[1140px] mx-auto h-[500px] cta-bg rounded-3xl relative">
          <div className="absolute flex flex-col items-center gap-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-[1] w-11/12 md:w-full">
            <h1>Don't Miss our weekly posts</h1>
            <p className="text-center md:w-3/4 xl:w-1/2">
              Subscribe to our newsletter consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            {submitted ? (
              <p className="px-10 py-4 text-white bg-Primary rounded-xl">
                Thank you! Your submission has been received!
              </p>
            ) : (
              <form className="relative" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="px-8 xl:px-10 py-5 rounded-full bg-BlackLighter md:w-[460px]"
                />
                <button className="bg-[#353535] absolute right-5 top-1/2 -translate-y-1/2 py-3 px-8 rounded-full">
                  {isSubmitting ? (
                    "Please wait..."
                  ) : (
                    <img src={RightArrow} alt="RightArrow" className="w-5" />
                  )}
                </button>
              </form>
            )}
          </div>
          <GradientBottom />
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
