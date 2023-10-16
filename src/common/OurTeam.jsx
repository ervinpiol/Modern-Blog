import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { teamData } from "../data/teamData";
import SectionTitle from "./SectionTitle";

import FBIcon from "../assets/icons/facebook-icon.svg";
import IGIcon from "../assets/icons/instagram-icon.svg";
import TWIcon from "../assets/icons/twitter-icon.svg";
import YTIcon from "../assets/icons/youtube-icon.svg";

const OurTeam = () => {
  const [mainItem, setMainItem] = useState(teamData[0]);
  const icons = [
    { icon: FBIcon, link: "https://www.facebook.com/" },
    { icon: IGIcon, link: "https://www.instagram.com/" },
    { icon: TWIcon, link: "https://www.twitter.com/" },
    { icon: YTIcon, link: "https://www.youtube.com/" },
  ];

  const swapItems = (index) => {
    setMainItem(teamData[index]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="xl:w-[1440px] mx-auto glow">
        <div className="xl:w-[840px] mx-auto flex justify-center flex-col gap-16 xl:items-start pt-40 px-[5%] xl:px-0">
          <SectionTitle title="Our Team" />
          <div>
            <div className="xl:h-[420px] flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={mainItem.image}
                  alt="Profile Img"
                  className="object-cover w-full h-full md:rounded-l-3xl rounded-t-3xl md:rounded-r-none"
                />
              </div>
              <div className="flex flex-col items-center justify-center h-full gap-5 p-16 md:w-1/2 bg-BlueBlack rounded-b-3xl md:rounded-l-none md:rounded-r-3xl lg:h-auto">
                <h2>{mainItem.name}</h2>
                <span className="px-4 py-1 rounded-md bg-Primary">
                  {mainItem.job}
                </span>
                <p className="text-center">{mainItem.details}</p>
                <div className="flex gap-5 py-4">
                  {icons.map((icon, i) => (
                    <a
                      key={i}
                      href={icon.link}
                      target="_blank"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-full bg-opacity-5"
                    >
                      <img key={i} src={icon.icon} alt="Icon" />
                    </a>
                  ))}
                </div>
                <Link
                  to={`/authors/${mainItem.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="transition-all duration-500 ease-in-out hover:tracking-wider"
                >
                  View Profile
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 pt-6 md:flex-row">
              {teamData.map((team, i) => (
                <div
                  key={i}
                  className={`lg:w-1/4 h-[180px] rounded-3xl relative p-5 cursor-pointer bg-BlueBlack ${
                    team === mainItem ? "" : "top-gradient"
                  }`}
                  onClick={() => swapItems(i)}
                >
                  <div className="flex items-center gap-2 pt-2.5">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-8 rounded-full"
                    />
                    <p>{team.name}</p>
                  </div>
                  <span className="px-3 rounded-md py-1.5 bg-Primary rotate-90 absolute bottom-10 left-0">
                    {team.job}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
