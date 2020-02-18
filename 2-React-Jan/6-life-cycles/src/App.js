import React from "react";
import Firstname from "./components/Firstname";
function App() {
  const personObj = {
    name: "Hanim",
    lastname: "Kapusuz",
    age: 34
  };
  return (
    <>
      <Firstname personObj={personObj} />
    </>
  );
}

export default App;
