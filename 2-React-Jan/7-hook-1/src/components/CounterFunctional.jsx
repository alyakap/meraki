import React, { useState } from "react";

export default () => {
  const [counter, setCounter] = useState(555);
  const add = () => setCounter(counter + 1);
  const min = () => setCounter(counter - 1);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={add}>+</button>
      <button onClick={min}>-</button>
    </>
  );
};
