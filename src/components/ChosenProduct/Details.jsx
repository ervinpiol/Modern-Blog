import React from "react";
import { motion } from "framer-motion";

const Details = () => {
  return (
    <motion.div
      className="bg-BlueBlack md:w-[700px] mx-auto rounded-xl p-8 flex flex-col gap-8 xl:gap-5 shadow-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div>
        <h2>About the Product</h2>
        <p>
          Our exclusive collection is carefully crafted to provide comfort,
          style, and durability. Made with high-quality materials, our products
          are designed for both fashion and comfort, ensuring you look and feel
          great.
        </p>
      </div>
      <div>
        <h2>Additional Info</h2>
        <p>
          Our collection is produced with sustainability in mind, using
          eco-friendly materials and ethical manufacturing practices. You can
          use with pride, knowing they are environmentally responsible. These
          collections are versatile and perfect for various occasions.
        </p>
      </div>
      <div>
        <h2>Shipping</h2>
        <p>
          We offer fast and reliable shipping to anywhere in the country. Orders
          are typically processed and shipped within 24-48 hours. Plus, we offer
          free shipping on all order.
        </p>
      </div>
    </motion.div>
  );
};

export default Details;
