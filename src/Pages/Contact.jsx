import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slices/count-slice";


const Contact = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => dispatch(increment())}>plus</button>
    </div>
  );
};

export default Contact;