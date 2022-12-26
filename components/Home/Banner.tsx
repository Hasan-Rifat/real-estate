import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../app/featuers/counter/counterSlice";
import { RootState } from "../../app/store";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Banner</div>
      <div className="bg-emerald-500 w-full p-8">
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <h2>{count}</h2>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Banner;
