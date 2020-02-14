import React from "react";
import SuggestionItem from "./SuggestionItem";
import axios from "axios";

export default class Suggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSuggestions: {
        loading: false,
        error: false,
        data: []
      }
    };
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      searchSuggestions: {
        ...this.state.searchSuggestions,
        loading: true
      }
    });
    axios
      .get(
        `https://api.tenor.com/v1/search_suggestions?q=${this.props.searchStr}&key=LIVDSRZULELA`
      )
      .then(response => {
        if (response.data.results) {
          this.setState({
            ...this.state,
            searchSuggestions: {
              loading: false,
              error: false,
              data: [...response.data.results]
            }
          });
        } else {
          this.setState({
            ...this.state,
            searchSuggestions: {
              error: false,
              loading: false,
              data: []
            }
          });
        }
      })
      .catch(error => {
        this.setState({
          ...this.state,
          searchSuggestions: {
            ...this.state.searchSuggestions,
            error: true,
            loading: false
          }
        });
        throw error;
      });
  }
  emptySuggestions = () => {
    this.setState({
      ...this.state,
      searchSuggestions: {
        ...this.state.searchSuggestions,
        loading: false,
        error: false,
        data: []
      }
    });
  };

  render() {
    return (
      this.state.searchSuggestions.data.length > 0 &&
      this.state.searchSuggestions.data.map(suggestion => (
        <SuggestionItem
          emptySuggestions={this.emptySuggestions}
          key={suggestion}
          itemObj={suggestion}
          updateInput={this.props.updateInput}
        />
      ))
    );
  }
}
