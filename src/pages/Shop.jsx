import React, { useState } from "react";
import { motion } from "framer-motion";

import { shopData } from "../data/shopData";
import ShopItems from "../components/Shop/ShopItems";
import CategoryNav from "../components/Shop/CategoryNav";
import Transition from "../layouts/Transition";

const Shop = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterShopData =
    selectedFilter === "all"
      ? shopData
      : shopData.filter((item) => item.type === selectedFilter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.75 }}
    >
      <div className="xl:w-[1440px] mx-auto">
        <div className="lg:w-4/5 xl:w-[90%] mx-auto flex justify-center items-center pt-40 flex-col gap-16 px-[5%] xl:px-[16%]">
          <CategoryNav
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <ShopItems filterShopData={filterShopData} />
        </div>
      </div>
    </motion.div>
  );
};

export default Transition(Shop);
