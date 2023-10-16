import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartProvider";

import Modal from "../components/Cart/Modal";
import Menu from "./Menu";
import Line from "../common/Line";
import NavList from "../common/NavList";
import CartIcon from "../assets/icons/cart-icon.svg";
import Logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { totalQty } = useCart();

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <>
      <div className="xl:w-[1440px] relative z-20 flex justify-center mx-auto">
        <div className="xl:w-[90%] absolute top-10 xl:top-14 w-full px-[5%] xl:px-0">
          <div className="flex items-center justify-between gap-6">
            <Link to="/">
              <div className="w-[100px]">
                <img src={Logo} alt="Logo" className="w-full" />
              </div>
            </Link>
            <Line isHeader />
            <div className="flex items-center gap-6">
              <NavList />
              <div className="flex items-center gap-6">
                <button
                  className="flex items-center gap-2 px-4 py-3 transition-all duration-500 ease-out rounded-full hover:bg-white hover:bg-opacity-10"
                  onClick={() => setOpenModal(true)}
                >
                  <div className="w-5">
                    <img src={CartIcon} alt="CartIcon" className="w-full" />
                  </div>
                  <span className="items-center justify-center hidden w-5 h-5 text-sm font-bold text-black bg-white rounded-full lg:flex">
                    {totalQty}
                  </span>
                </button>
                <div
                  className="flex flex-col gap-1 lg:hidden"
                  onClick={() => setOpenMenu((prev) => !prev)}
                >
                  <div
                    className={`w-5 h-[2px] bg-white  relative transition-all duration-500 ease-in-out ${
                      openMenu && "rotate-[42deg] top-[3px]"
                    }`}
                  />
                  <div
                    className={`w-5 h-[2px] bg-white  relative transition-all duration-500 ease-in-out ${
                      openMenu && "rotate-[-42deg] top-[-3px]"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <AnimatePresence>{openMenu && <Menu />}</AnimatePresence>
    </>
  );
};

export default Header;
