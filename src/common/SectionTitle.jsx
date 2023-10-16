import React from "react";
import { motion } from "framer-motion";
import Line from "./Line";

const SectionTitle = ({ title, isSolo }) => {
  return (
    <div className="flex flex-col items-center w-full gap-1 lg:gap-6 lg:flex-row">
      {!isSolo && <Line />}
      <motion.h2
        className="whitespace-nowrap"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {title}
      </motion.h2>
      <Line />
    </div>
  );
};

export default SectionTitle;
