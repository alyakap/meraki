import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import SearchByCountry from "./SearchByCountry";
import SearchBySource from "./SearchBySource";
import SearchByDateRange from "./SearchByDateRange";
import SearchByLanguage from "./SearchByLanguage";
import SeachByDomain from "./SeachByDomain";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      searchByCountry: "",
      searchBySource: "",
      searchByDateRage: {
        from: this.getTodaysDate(),
        till: this.getTodaysDate()
      },
      searchByLanguage: "",
      searchByDomain: [],
      results: {
        loading: false,
        error: false,
        data: []
      }
    };
  }

  getTodaysDate() {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
    return date;
  }

  handleSearchBarChange(str) {
    this.setState({
      ...this.state,
      searchBar: str
    });
  }
  handleSearchByCountrySelection(str) {
    this.setState({
      ...this.state,
      searchByCountry: str
    });
  }
  handleSearchBySourceSelection(str) {
    this.setState({
      ...this.state,
      searchBySource: str
    });
  }

  handleSearchByDateRangeChange1(date1) {
    this.setState({
      ...this.state,
      searchByDateRage: {
        ...this.state.searchByDateRage,
        from: date1
      }
    });
  }
  handleSearchByDateRangeChange2(date2) {
    this.setState({
      ...this.state,
      searchByDateRage: {
        ...this.state.searchByDateRage,
        till: date2
      }
    });
  }

  handleSearchByLanguageChange(str) {
    this.setState({
      ...this.state,
      searchByLanguage: str
    });
  }
  handleSearchByDomainChange(arr) {
    this.setState({
      ...this.state,
      searchByDomain: arr
    });
  }

  getResult() {
    console.log("serach button activated");
    this.setState({
      ...this.state,
      results: {
        ...this.state.results,
        loading: true
      }
    });
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${
          this.state.SearchByCountry
        }&q=${this.state.searchBar}&from=${
          this.state.searchByDateRage.from
        }&to=${
          this.state.searchByDateRage.till
        }&domains=${this.state.searchByDomain.join(",")}&language=${
          this.state.searchByLanguage
        }&sources=${
          this.state.searchBySource
        }&apiKey=f1841cd7465044d38f5fe573565cb0b5`
      )
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
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          this.getResult();
        }}
      >
        <Grid container spacing={3} justify="center">
          <SearchBar
            val={this.state.searchBar}
            change={this.handleSearchBarChange.bind(this)}
          />
          <SearchByCountry
            val={this.state.searchByCountry}
            change={this.handleSearchByCountrySelection.bind(this)}
          />
          <SearchBySource
            val={this.state.searchByCountry}
            change={this.handleSearchBySourceSelection.bind(this)}
          />
          <SearchByDateRange
            val={this.state.searchByDateRage}
            change1={this.handleSearchByDateRangeChange1.bind(this)}
            change2={this.handleSearchByDateRangeChange2.bind(this)}
          />
          <SearchByLanguage
            val={this.state.searchByLanguage}
            change={this.handleSearchByLanguageChange.bind(this)}
          />
          <SeachByDomain
            val={this.state.searchByDomain}
            change={this.handleSearchByDomainChange.bind(this)}
          />

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
