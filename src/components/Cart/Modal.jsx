import React from "react";
import { useCart } from "../../context/CartProvider";

import OrderCompleted from "./OrderCompleted";
import Empty from "./Empty";
import Fill from "./Fill";
import CrossIcon from "../../assets/icons/Cross-Black.svg";

const Modal = ({ setOpenModal }) => {
  const {
    cartItems,
    removeFromCart,
    updateCartItemQuantity,
    isWaiting,
    setIsWaiting,
    handleCheckout,
    isCheckout,
  } = useCart();

  const handleQuantityChange = (i, updatedQuantity) => {
    setIsWaiting(true);
    setTimeout(() => {
      updateCartItemQuantity(i, updatedQuantity);
      setIsWaiting(false);
    }, 2000);
  };

  return (
    <div className="fixed flex items-center justify-center w-screen h-screen bg-black bg-opacity-60 z-[100]">
      <div className="bg-white md:w-[480px] w-screen h-screen md:h-auto text-black relative">
        {isCheckout && cartItems.length === 0 ? (
          <OrderCompleted setOpenModal={setOpenModal} />
        ) : (
          <>
            <div className="flex items-center justify-between w-full px-5 py-4">
              <h3>Your Cart</h3>
              <button onClick={() => setOpenModal(false)}>
                <img src={CrossIcon} alt="CrossIcon" />
              </button>
            </div>
            {cartItems.length === 0 ? (
              <Empty />
            ) : (
              <Fill
                items={cartItems}
                handleCheckout={handleCheckout}
                isWaiting={isWaiting}
                removeFromCart={removeFromCart}
                handleQuantityChange={handleQuantityChange}
                isCheckout={isCheckout}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
