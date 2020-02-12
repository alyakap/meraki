import React from "react";
import ChosenGif from "./components/ChosenGif";
import Form from "./components/Form";
import GifGrid from "./components/GifGrid";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoad: true,
      SearchStr: "",
      gifs: {
        disabled: false,
        loading: false,
        error: false,
        data: []
      },
      chosenGif: "",
      searchSuggestions: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  updateSeacrhStrValue(str) {
    this.setState({
      ...this.state,
      SearchStr: str
    });
    axios
      .get(`https://api.tenor.com/v1/autocomplete?q=${str}&key=LIVDSRZULELA`)
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
  setChosenGif(id) {
    this.setState({
      ...this.state,
      chosenGif: id
    });
  }
  getGif() {
    this.setState({
      ...this.state,
      gifs: {
        ...this.state.gifs,
        loading: true,
        disabled: true
      }
    });

    axios
      .get(
        `https://api.tenor.com/v1/search?tag=${this.state.SearchStr}&key=LIVDSRZULELA`
      )
      .then(response => {
        if (response.data.results) {
          this.setState({
            ...this.state,
            pageLoad: false,
            gifs: {
              error: false,
              loading: false,
              data: [...response.data.results],
              disabled: false
            }
          });
        } else {
          this.setState({
            ...this.state,
            gifs: {
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
          gifs: {
            ...this.state.gifs,
            error: true,
            loading: false
          }
        });
        throw error;
      });
  }

  updateInput(str) {
    this.setState({
      ...this.state,
      SearchStr: str
    });
  }

  clearChosenGif() {
    this.setState({
      ...this.state,
      chosenGif: ""
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.chosenGif ? (
          <ChosenGif
            id={this.state.chosenGif}
            clearChosenGif={this.clearChosenGif.bind(this)}
          />
        ) : (
          <>
            <Form
              disabled={this.state.gifs.disabled}
              gifSearchStr={this.state.SearchStr}
              getGif={this.getGif.bind(this)}
              updateSeacrhStrValue={this.updateSeacrhStrValue.bind(this)}
              searchSuggestions={this.state.searchSuggestions}
              updateInput={this.updateInput.bind(this)}
            />
            <GifGrid
              gifs={this.state.gifs}
              pageLoad={this.state.pageLoad}
              setChosenGif={this.setChosenGif.bind(this)}
            />
          </>
        )}
      </div>
    );
  }
}
