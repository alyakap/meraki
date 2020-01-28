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
        from: "",
        till: ""
      },
      searchByLanguage: "",
      searchByDomain: []
    };
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
  fillSearchBySourceOptions() {
    axios.get(
      `https://newsapi.org/v2/sources?language=${this.searchBySource}&apiKey=f1841cd7465044d38f5fe573565cb0b5`
    );
  }

  render() {
    return (
      <form noValidate autoComplete="off">
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
          <SearchByDateRange />
          <SearchByLanguage />
          <SeachByDomain />

          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="large">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
