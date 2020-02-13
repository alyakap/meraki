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

  setChosenGif(id) {
    this.setState({
      ...this.state,
      chosenGif: id
    });
  }
  getGif(e) {
    if (e) {
      e.preventDefault()
    }
    this.setState({
      ...this.state,
      searchSuggestions: {
        loading: false,
        error: false,
        data: []
      },
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

  //updating the input field and clearing the suggestions
  updateInput(e) {
    let str;
    if (e.target.tagName === "INPUT") {
      str = e.target.value;
      const len = str.length;
      //setting searchString in state

      if (len <= 3) {
        //empty suggestions
        this.setState({
          ...this.state,
          SearchStr: str,
        }, () => {
          this.emptySuggestions(str)
        });
      } else {
        //get suggestions
        this.setState({
          ...this.state,
          SearchStr: str
        }, () => { this.getSuggestions(str) })
      }
    } else {
      str = e.target.textContent
      this.setState({
        ...this.state,
        SearchStr: str,
      }, () => {
        this.getGif()
      })
    }

  }

  emptySuggestions(str) {
    // console.log('empty: ', this.state.SearchStr)
    // this.setState((state, props) => {
    //   console.log('correct', state.SearchStr)
    //   console.log('props', props)
    // })


    this.setState({
      ...this.state,
      searchSuggestions: {
        ...this.state.searchSuggestions,
        loading: false,
        error: false,
        data: []
      }
    });
  }

  getSuggestions(str) {
    this.setState({
      ...this.state,
      searchSuggestions: {
        ...this.state.searchSuggestions,
        loading: true
      }
    });
    axios
      .get(`https://api.tenor.com/v1/search_suggestions?q=${str}&key=LIVDSRZULELA`)
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
