import React from "react";
import CTA from "../common/CTA";
import OurTeam from "../common/OurTeam";
import Transition from "../layouts/Transition";

const Authors = () => {
  return (
    <>
      <OurTeam />
      <CTA />
    </>
  );
};

export default Transition(Authors);
