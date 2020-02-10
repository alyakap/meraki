import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import SearchByOrderBy from "./SearchByOrderBy";
import SearchBySource from "./SearchBySource";
import SearchByDateRange from "./SearchByDateRange";
import SearchByLanguage from "./SearchByLanguage";
import SeachByDomain from "./SeachByDomain";
import Button from "@material-ui/core/Button";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.boundHandleChange = this.handleChange.bind(this);

    this.state = {
      searchBar: "",
      searchByOrderBy: "",
      searchBySource: "",
      searchByDateRage: {
        from: "",
        till: "" // or new Date()
      },
      searchByLanguage: "",
      searchByDomain: []
    };
  }

  getUrl() {
    return `https://newsapi.org/v2/everything?sortBy=${
      this.state.searchByOrderBy
    }&q=${this.state.searchBar}&from=${this.state.searchByDateRage.from}&to=${
      this.state.searchByDateRage.till
    }&domains=${this.state.searchByDomain.join(",")}&language=${
      this.state.searchByLanguage
    }&sources=${
      this.state.searchBySource
    }&apiKey=f1841cd7465044d38f5fe573565cb0b5`;
  }

  handleChange(field) {
    return val => {
      const newState = { ...this.state };
      newState[field] = val;
      this.setState(newState);
    };
  }

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          this.props.getResult(this.getUrl());
        }}
      >
        <Grid container spacing={3} justify="center">
          <SearchBar
            val={this.state.searchBar}
            change={this.boundHandleChange("searchBar")}
          />
          <SearchByOrderBy
            val={this.state.searchByOrderBy}
            change={this.boundHandleChange("searchByOrderBy")}
          />
          <SearchBySource
            val={this.state.searchBySource}
            change={this.boundHandleChange("searchBySource")}
          />
          <SearchByDateRange
            val={this.state.searchByDateRage}
            change={this.boundHandleChange("searchByDateRage")}
          />
          <SearchByLanguage
            val={this.state.searchByLanguage}
            change={this.boundHandleChange("searchByLanguage")}
          />
          <SeachByDomain
            val={this.state.searchByDomain}
            change={this.boundHandleChange("searchByDomain")}
          />

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
