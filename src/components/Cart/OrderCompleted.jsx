import React from "react";

const OrderCompleted = ({ setOpenModal }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-20">
      <p className="text-3xl text-Black">Order Completed</p>
      <button
        className="px-10 py-3 text-white bg-Primary"
        onClick={() => setOpenModal(false)}
      >
        Done
      </button>
    </div>
  );
};

export default OrderCompleted;
