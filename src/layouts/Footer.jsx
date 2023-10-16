import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../assets/logo.png";

const Footer = () => {
  const mainLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Authors", link: "/authors" },
    { title: "Author Single", link: "/authors/emily-davis" },
    { title: "Shop", link: "/shop" },
    { title: "Shop Single", link: "/shop/cap" },
    { title: "Contact", link: "/contact" },
  ];

  const otherLinks = [
    { title: "Blog", link: "/blog" },
    { title: "Blog Single", link: "/blog/the-5g-technology" },
    { title: "Categories", link: "/categories" },
    { title: "Categories Single", link: "/categories/technology" },
    { title: "Privacy Policy", link: "/" },
    { title: "Terms & Conditions", link: "/" },
  ];

  return (
    <div className="w-screen bg-BlueBlack">
      <div className="xl:w-[1440px] mx-auto overflow-hidden">
        <motion.div
          className="xl:w-[90%] mx-auto mt-8 px-[5%] xl:px-[2.5%] flex justify-between py-20 flex-col lg:flex-row items-center lg:items-start gap-10"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-col items-center w-full md:items-start">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </Link>
            <p className="text-center">
              Pushing the the boundaries of the blogosphere.
            </p>
          </div>
          <div className="grid gap-10 xl:gap-4 md:grid-cols-[1.25fr_1.25fr_1fr] w-full font-OpenSans justify-center items-center lg:items-start">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-lg">Main</span>
              <ul className="flex flex-col items-center gap-3 font-light md:items-start text-LightGrey">
                {mainLinks.map((link, i) => (
                  <li
                    key={i}
                    className="transition-all duration-500 ease-in-out hover:opacity-30"
                  >
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-lg">Other Pages</span>
              <ul className="flex flex-col items-center gap-3 font-light md:items-start text-LightGrey">
                {otherLinks.map((link, i) => (
                  <li
                    key={i}
                    className="transition-all duration-500 ease-in-out hover:opacity-30"
                  >
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="text-lg">Utilities</span>
              <ul className="flex flex-col items-center gap-3 font-light md:items-start text-LightGrey">
                <li>Style Guide</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>Instructions</li>
                <li>404</li>
                <li>Password</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
