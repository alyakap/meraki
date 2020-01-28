import React from "react";
import Container from "@material-ui/core/Container";
import Search from "./Components/Search";
import Result from "./Components/Result";
import "typeface-roboto";
import "./App.css";

function App() {
  return (
    <Container maxWidth="lg">
      <Search />
      <Result />
    </Container>
  );
}

export default App;
