import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";

import Header from "./layouts/Header";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Authors from "./pages/Authors";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ChosenCategory from "./pages/ChosenCategory";
import ChosenAuthor from "./pages/ChosenAuthor";
import ChosenProduct from "./pages/ChosenProduct";
import ChosenBlog from "./pages/ChosenBlog";
import { AnimatePresence } from "framer-motion";
import Preloader from "./layouts/Preloader";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2700);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} />
        <Route path="authors" element={<Authors />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/categories/:categoryName" element={<ChosenCategory />} />
        <Route path="/authors/:authorName" element={<ChosenAuthor />} />
        <Route path="/shop/:itemName" element={<ChosenProduct />} />
        <Route path="/blog/:blogName" element={<ChosenBlog />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
