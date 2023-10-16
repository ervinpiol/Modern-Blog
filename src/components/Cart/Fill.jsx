import React from "react";

const Fill = ({
  items,
  handleCheckout,
  isWaiting,
  removeFromCart,
  handleQuantityChange,
}) => {
  const calculateSubtotal = () =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);
  const subTotal = calculateSubtotal();

  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-5 py-4 border-t ${
            isWaiting && "opacity-40"
          }`}
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-[60px]" />
            <div className="flex flex-col items-start">
              <span className="font-bold">{item.title}</span>
              <span>$ {item.price}.00 USD</span>
              <button
                className="text-red-600"
                onClick={() => removeFromCart(item, i)}
              >
                Remove
              </button>
            </div>
          </div>
          <div>
            <input
              type="number"
              max="9999"
              min="1"
              step="1"
              placeholder="1"
              className="w-16 px-3 py-2 text-black bg-white border rounded-md placeholder:text-black"
              value={item.quantity}
              onChange={(e) => {
                const updatedQuantity = parseInt(e.target.value, 10);
                handleQuantityChange(i, updatedQuantity);
              }}
            />
          </div>
        </div>
      ))}
      <div className="px-5 py-4 border-t">
        <div className="flex justify-between pb-4 ">
          <span className="">Subtotal</span>
          <p className="font-bold text-black">$ {subTotal}.00 USD</p>
        </div>
        <button
          className="w-full py-4 text-sm text-white uppercase rounded-full bg-Primary"
          onClick={handleCheckout}
        >
          {isWaiting ? "Checking out..." : "Continue to checkout"}
        </button>
      </div>
    </>
  );
};

export default Fill;
