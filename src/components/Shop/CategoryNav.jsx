import React from "react";

const CategoryNav = ({ selectedFilter, setSelectedFilter }) => {
  const filters = ["all", "clothing", "accessories", "souvenir"];

  return (
    <div className="bg-white bg-opacity-10 flex px-4 py-2.5 xl:rounded-full font-semibold gap-5 xl:gap-10 flex-col xl:flex-row w-full rounded-3xl md:w-1/2 xl:w-full">
      {filters.map((filter, i) => (
        <button
          key={i}
          className={`px-10 py-4 rounded-3xl uppercase ${
            filter === selectedFilter
              ? "bg-Primary"
              : "hover:bg-white hover:bg-opacity-10 transition-all duration-500 ease-in-out"
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
