import React from "react";
import Details from "../components/ChosenProduct/Details";
import Product from "../components/ChosenProduct/Product";
import Transition from "../layouts/Transition";

const ChosenProduct = () => {
  return (
    <div>
      <div className="xl:w-[1440px] mx-auto">
        <div className="xl:w-[90%] mx-auto relative flex justify-center items-center pt-48 xl:px-[16%] pb-20 flex-col gap-12 px-[5%]">
          <Product />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Transition(ChosenProduct);
