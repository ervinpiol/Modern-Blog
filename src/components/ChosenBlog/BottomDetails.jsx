import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { teamData } from "../../data/teamData";

const BottomDetails = ({ blog }) => {
  const author = teamData.find((team) => team.name === blog.author);

  return (
    <div className="flex flex-col items-center gap-10 mt-20 lg:items-start lg:flex-row">
      <motion.div
        className="flex flex-col flex-1 gap-6"
        initial={{ opacity: 0, y: 100, x: -50 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {blog.details.map((detail, i) => (
          <div key={i}>
            <h2 className="font-bold">{detail.h2Text}</h2>
            <p>{detail.pText}</p>
          </div>
        ))}
        <p className="text-white border-l-[6px] border-SkyBlue px-4 py-2 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          venenatis interdum posuere. Morbi id magna at arcu tempus ornare.
          Fusce mauris purus, rhoncus a sollicitudin sit amet, placerat vitae
          nisl. Morbi feugiat est in accumsan facilisis.
        </p>
        <div>
          <h2>Conclusion:</h2>
          <p>{blog.conclusion}</p>
        </div>
      </motion.div>
      <motion.div
        className="lg:w-[28%] bg-Primary rounded-3xl black-gradient"
        initial={{ opacity: 0, y: -100, x: 40 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 1 }}
      >
        <Link
          to={`/authors/${author.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex flex-col items-center gap-4 px-10 py-12"
        >
          <img
            src={author.image}
            alt={author.name}
            className="rounded-full w-[130px]"
          />
          <h3>{author.name}</h3>
          <span>{author.job}</span>
          <p className="text-center">{author.details}</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default BottomDetails;
