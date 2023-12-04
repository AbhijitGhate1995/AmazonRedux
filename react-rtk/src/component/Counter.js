import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import { getCartTotal } from "../features/cartSlice";

export default function Counter() {
  const count = useSelector((c) => c.counter.value);
  const dispatch = useDispatch();
  

  return (
    <>
      <div className="flex flex-col justify-center w-full">
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
}