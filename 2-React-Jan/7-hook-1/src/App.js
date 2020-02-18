import React from "react";
import CounterClass from "./components/CounterClass";
import CounterFunctional from "./components/CounterFunctional";

export default function App() {
  return (
    <div>
      <CounterClass />
      <p>----------------------------------</p>
      <CounterFunctional />
    </div>
  );
}
