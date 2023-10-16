import React from "react";
import { Link } from "react-router-dom";

const ShopItems = ({ filterShopData }) => {
  return (
    <div>
      <div className="grid gap-8 pb-20 md:grid-cols-2">
        {filterShopData.map((shop, i) => (
          <Link
            key={i}
            to={`/shop/${shop.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="relative px-6 py-8 bg-Primary rounded-3xl group"
          >
            <img
              src={shop.image}
              alt={shop.title}
              className="object-cover w-3/4 mx-auto transition-all duration-1000 ease-in-out group-hover:scale-110"
            />
            <div className="flex flex-col items-center w-3/4 gap-3 mx-auto mt-4">
              <h3>{shop.title}</h3>
              <p className="text-center">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
              </p>
              <span>$ {shop.price}.00 USD</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
