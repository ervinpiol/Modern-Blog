import React from "react";
import { motion } from "framer-motion";

const Line = ({ isHeader, isGrid }) => {
  return (
    <motion.div
      className={`w-full h-[1px] bg-Gray opacity-30 relative top-[1px] ${
        isHeader && "hidden lg:block"
      }`}
      initial={{ opacity: isGrid ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true, amount: 0.8 }}
    />
  );
};

export default Line;
