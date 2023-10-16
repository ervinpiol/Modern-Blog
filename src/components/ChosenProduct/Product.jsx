import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { shopData } from "../../data/shopData";
import { useCart } from "../../context/CartProvider";

const Product = () => {
  const { itemName } = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const { addToCart, isWaiting, setIsWaiting } = useCart();

  const item = shopData.find(
    (shop) => shop.title.toLowerCase().replace(/\s+/g, "-") === itemName
  );

  const handleAddToCart = () => {
    const newItem = {
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: selectedQuantity,
    };
    setIsWaiting(true);
    setTimeout(() => {
      addToCart(newItem);
      setSelectedQuantity(1);
      setIsWaiting(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row">
      <motion.div
        className="p-10 bg-Primary rounded-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 3 }}
      >
        <img src={item.image} alt={item.title} />
      </motion.div>
      <motion.div
        className="md:w-full lg:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.75 }}
      >
        <h1 className="text-start">{item.title}</h1>
        <p className="text-[28px] xl:text-[32px] whitespace-nowrap">
          <span className="text-white">$ {item.price}.00 USD</span>{" "}
          <span className="text-[21px] xl:text-2xl line-through text-LightGrey">
            $ {item.lastPrice}.00 USD
          </span>
        </p>
        <div className="pt-8">
          <span className="inline-block w-full border-b text-LightGrey">
            Description
          </span>
          <p className="text-sm">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
        <div className="flex flex-col gap-2 pt-8">
          <label>Quantity</label>
          <input
            type="number"
            max="9999"
            min="1"
            step="1"
            placeholder="1"
            className="w-16 px-3 py-2 text-black bg-white placeholder:text-black"
            value={selectedQuantity}
            onChange={(e) => {
              setSelectedQuantity(parseInt(e.target.value, 10));
            }}
          />
        </div>
        <button
          className="px-5 py-3 mt-5 text-xs uppercase rounded-full bg-Primary"
          onClick={handleAddToCart}
        >
          {isWaiting ? "Adding to cart..." : "Add to cart"}
        </button>
      </motion.div>
    </div>
  );
};

export default Product;
