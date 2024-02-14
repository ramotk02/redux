import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {decrement, increment} from "../redux/slices/count-slice"

const Home = () => {
  const count = useSelector(state => state.countReducer)
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>minus</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>plus</button>
    </div>
  );
};

export default Home;