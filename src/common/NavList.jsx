import React from "react";
import { NavLink } from "react-router-dom";

const NavList = ({ isMenu }) => {
  const navList = [
    { title: "Home" },
    { title: "Blog" },
    { title: "About" },
    { title: "Categories" },
    { title: "Authors" },
    { title: "Shop" },
    { title: "Contact" },
  ];

  return (
    <ul
      className={`items-center uppercase z-20 ${
        isMenu
          ? "flex flex-col gap-10 absolute top-36 text-lg"
          : "lg:flex hidden gap-4"
      }`}
    >
      {navList.map((nav, i) => (
        <li
          key={i}
          className={`relative flex items-center after:pl-4 ${
            i <= 5 && !isMenu && "after:content-['•']"
          }`}
        >
          <NavLink
            to={`/${i === 0 ? "" : nav.title.toLowerCase()}`}
            className="transition-all duration-500 ease-in-out hover:opacity-30"
          >
            {nav.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
