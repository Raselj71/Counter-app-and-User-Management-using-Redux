import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./Service/Action";

function Home() {
  const count = useSelector((state) => state.count);

  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>count: {count}</div>
      <button
        onClick={() => {
          dispatch(incrementCounter());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrementCounter());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(resetCounter());
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Home;
