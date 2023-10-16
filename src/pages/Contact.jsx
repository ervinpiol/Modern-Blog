import React from "react";
import { motion } from "framer-motion";

import Form from "../components/Contact/Form";
import Faq from "../components/Contact/Faq";
import Transition from "../layouts/Transition";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.75 }}
    >
      <div className="xl:w-[1440px] mx-auto">
        <div className="xl:w-[90%] flex flex-col items-center justify-center mx-auto pt-40 px-[5%] xl:px-[10%]">
          <div className="lg:w-[90%] lg:px-[8%] md:w-[580px]">
            <Form />
            <Faq />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Transition(Contact);
