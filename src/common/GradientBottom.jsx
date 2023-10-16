import React from "react";

const GradientBottom = ({ notRounded, left }) => {
  return (
    <div
      className={`gradient-bottom ${
        notRounded ? "" : left ? "xl:rounded-l-3xl" : "rounded-3xl"
      }`}
    />
  );
};

export default GradientBottom;
