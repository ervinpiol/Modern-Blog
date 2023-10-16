import React from "react";
import Intro from "../components/About/Intro";
import OurTeam from "../common/OurTeam";
import CTA from "../common/CTA";
import OurValues from "../components/About/OurValues";
import Transition from "../layouts/Transition";

const About = () => {
  return (
    <>
      <Intro />
      <OurTeam />
      <OurValues />
      <CTA />
    </>
  );
};

export default Transition(About);
