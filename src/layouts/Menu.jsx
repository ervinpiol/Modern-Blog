import React from "react";
import { motion } from "framer-motion";
import NavList from "../common/NavList";

const Menu = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-Primary lg:hidden"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.4 }}
    >
      <NavList isMenu />
    </motion.div>
  );
};

export default Menu;
