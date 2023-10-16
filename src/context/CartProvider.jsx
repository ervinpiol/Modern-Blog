import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, id: cartItems.length + 1 },
      ]);
    }
    setTotalQty((prevTotal) => prevTotal + item.quantity);
  };

  const removeFromCart = (item) => {
    const upadatedCart = cartItems.filter((cartItem) => cartItem !== item);

    setIsWaiting(true);
    setTimeout(() => {
      setCartItems(upadatedCart);
      setTotalQty((prevTotal) => prevTotal - item.quantity);
      setIsWaiting(false);
    }, 2000);
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((cartItem, index) =>
        index === itemId ? { ...cartItem, quantity: newQuantity } : cartItem
      )
    );
    setTotalQty(newQuantity);
  };

  const handleCheckout = () => {
    setIsWaiting(true);
    setTimeout(() => {
      setCartItems([]);
      setTotalQty(0);
      setIsCheckout(true);
    }, 2000);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalQty,
        updateCartItemQuantity,
        isWaiting,
        setIsWaiting,
        setCartItems,
        handleCheckout,
        isCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
