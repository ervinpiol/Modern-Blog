import React from "react";
import Preloader from "./Preloader";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <Preloader />
    </>
  );
};

export default Transition;
