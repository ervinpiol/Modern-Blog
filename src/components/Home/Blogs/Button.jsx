import React from "react";

const Button = ({ selected, setSelected }) => {
  return (
    <div className="bg-white bg-opacity-10 flex px-4 py-2.5 rounded-full font-semibold gap-5">
      <button
        className={`px-10 py-4 rounded-3xl ${
          selected === "trending"
            ? "bg-Primary"
            : "hover:bg-white hover:bg-opacity-10 transition-all duration-500 ease-in-out"
        }`}
        onClick={() => setSelected("trending")}
      >
        TRENDING
      </button>
      <button
        className={`px-10 py-4 rounded-3xl ${
          selected === "latest"
            ? "bg-Primary"
            : "hover:bg-white hover:bg-opacity-10 transition-all duration-500 ease-in-out"
        }`}
        onClick={() => setSelected("latest")}
      >
        LATEST
      </button>
    </div>
  );
};

export default Button;
