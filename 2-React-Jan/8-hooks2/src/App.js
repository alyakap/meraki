import React from "react";

import FormClass from "./components/FormClass";
import FormFunctional from "./components/FormFunctional";
export default function App() {
  return (
    <div className="App">
      <FormClass />
      <p>------------------------</p>
      <FormFunctional />
    </div>
  );
}
