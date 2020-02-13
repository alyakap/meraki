import React from "react";
import Form from "./components/Form";
import GifGrid from "./components/GifGrid";
import ChosenGif from "./components/ChosenGif";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: "",
      pageLoad: true,
      gifs: {
        loading: false,
        error: false,
        disabled: false,
        data: []
      },
      chosenGif: ""
    };
  }

  updateSearchStr = event => {
    this.setState({ searchStr: event.target.value });
  };
  getGifs = () => {
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
        `https://api.tenor.com/v1/search?tag=${this.state.searchStr}&key=LIVDSRZULELA`
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
  };
  setChosenGif = id => {
    this.setState({
      ...this.state,
      chosenGif: id
    });
  };
  clearChosenGif = () => {
    this.setState({
      ...this.state,
      chosenGif: ""
    });
  };
  render() {
    return (
      <>
        {this.state.chosenGif ? (
          <ChosenGif
            id={this.state.chosenGif}
            clearChosenGif={this.clearChosenGif}
          />
        ) : (
          <>
            <Form
              updateSearchStr={this.updateSearchStr}
              getGifs={this.getGifs}
              disabled={this.state.gifs.disabled}
            />
            <GifGrid
              gifs={this.state.gifs}
              pageLoad={this.state.pageLoad}
              setChosenGif={this.setChosenGif}
            />
          </>
        )}
      </>
    );
  }
}
