import React from "react";
import { motion } from "framer-motion";

import MailIcon from "../../assets/icons/mail-icon.svg";
import PhoneIcon from "../../assets/icons/phone-icon.svg";

const AuthorDetails = ({ author }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-5 mx-auto lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.75 }}
    >
      <img
        src={author.image}
        alt={author.name}
        className="w-[200px] lg:w-[20%] rounded-full"
      />
      <div className="flex flex-col items-center gap-3 lg:items-start">
        <h3>{author.name}</h3>
        <p className="w-4/5 text-center lg:w-auto">{author.details}</p>
        <a href="" className="flex items-center gap-3 text-sm">
          <img src={MailIcon} alt="MailIcon" className="w-5" />
          <span>
            {author.name.toLowerCase().replace(/\s/g, "")}@modernblog.com
          </span>
        </a>
        <a href="" className="flex items-center gap-3 text-sm">
          <img src={PhoneIcon} alt="PhoneIcon" className="w-5" />
          <span>+123 (456 789)</span>
        </a>
      </div>
    </motion.div>
  );
};

export default AuthorDetails;
