import React from "react";
import Container from "@material-ui/core/Container";
import Search from "./Components/Search";
import Result from "./Components/Result";
import "typeface-roboto";
import "./App.css";
//add state here
/*
     // results: {
      //   loading: false,
      //   error: false,
      //   data: []
      // }
*/

// state =>
//   getArticles(url)

// boundGetArt(url)

function App() {
  return (
    <Container maxWidth="md">
      <Search boundGetArt />
      <Result passResults />
    </Container>
  );
}

export default App;
