import React from "react";
import Firstname from "./components/Firstname";
function App() {
  const person = {
    name: "Hanim",
    lastname: "Kapusuz",
    age: 34
  };
  return (
    <>
      <Firstname person={person} />
      <button>David</button>
      <button>38</button>
      <button>Toggle</button>
    </>
  );
}

export default App;
