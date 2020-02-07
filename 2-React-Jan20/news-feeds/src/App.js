import React from "react";
import Container from "@material-ui/core/Container";
import Search from "./Components/Search";
import Result from "./Components/Result";
import "typeface-roboto";
import "./App.css";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.boundGetResults = this.getResult.bind(this);
    this.state = {
      results: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  getResult(url) {
    this.setState({
      ...this.state,
      results: {
        ...this.state.results,
        loading: true
      }
    });
    axios
      .get(url)
      .then(response => {
        if (response.data.articles) {
          this.setState({
            ...this.state,
            results: {
              ...this.state.results,
              loading: false,
              error: false,
              data: [...response.data.articles]
            }
          });
          console.log(this.state.results.data);
        } else {
          this.setState({
            ...this.state,
            results: {
              ...this.state.results,
              loading: false,
              error: false,
              data: []
            }
          });
        }
      })
      .catch(error => {
        this.setState({
          ...this.state,
          results: {
            ...this.state.results,
            loading: false,
            error: true,
            data: []
          }
        });
        throw error;
      });
  }

  render() {
    return (
      <Container maxWidth="md">
        <Search getResult={this.boundGetResults} />
        <Result />
      </Container>
    );
  }
}
