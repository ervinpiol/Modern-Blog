import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div className="fixed top-0 left-0 flex select-none pointer-events-none justify-between h-screen z-[999] overflow-hidden w-full">
      <motion.div
        className="fixed top-0 w-screen bg-BlueBlack h-1/2 z-[999]"
        initial={{ height: "50%" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.6, delay: 2.3 }}
      />
      <motion.div
        className="fixed bottom-0 w-screen bg-BlueBlack h-1/2 z-[999]"
        initial={{ height: "50%" }}
        animate={{ height: 0 }}
        transition={{ duration: 0.6, delay: 2.3 }}
      />
      <motion.div
        className="h-screen w-screen flex items-center justify-center fixed z-[9999] bg-BlueBlack"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.div
          className="flex text-[28px] -ml-2.5 overflow-hidden py-1.5 z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.h4
            className="leading-relaxed -mr-2.5 -rotate-90 text-LightGrey"
            initial={{ x: "-100%", rotate: -90 }}
            animate={{ x: 0, rotate: -90 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The
          </motion.h4>
          <motion.h4
            className="leading-[1.4rem]"
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Modern <br /> Blog
          </motion.h4>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
