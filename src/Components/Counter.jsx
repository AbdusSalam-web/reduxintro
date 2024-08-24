import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const cart = useSelector((state) => state.counter.value);
  const addItem = useDispatch();
  const removeItem = useDispatch();
  console.log(cart);
  return (
    <>
      <div className="flex flex-col items-center justify-center   ">
        <button
          disabled={cart == 10}
          onClick={() => addItem(increment())}
          className="bg-[#0d9488] text-[#FFF]  w-[130px] h-[44px] font-bold rounded-[10px] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:text-[rgba(255,255,255,0.8)]  "
        >
          + Add
        </button>
        <h1 className="font-bold text-[30px] my-[10px] text-[#555454] ">
          {cart<10? `0${cart}`:cart} Items added
        </h1>
        <button
          disabled={cart == 0}
          onClick={() => removeItem(decrement())}
          className="bg-teal-600 text-white w-[130px] h-[44px] font-bold rounded-[10px] disabled:bg-gray-300 disabled:cursor-not-allowed  transition-all duration-300 hover:text-[rgba(255,255,255,0.8)] "
        >
          - Remove
        </button>
      </div>
    </>
  );
};

export default Counter;
