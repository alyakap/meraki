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
    this.boundHandleChange = this.handleChange.bind(this)
    this.state = {
      searchBar: "",
      searchByCountry: "",
      searchBySource: "",
      searchByDateRage: {
        from: null,
        till: null // or new Date()
      },
      searchByLanguage: "",
      searchByDomain: [],
      // results: {
      //   loading: false,
      //   error: false,
      //   data: []
      // }
    };
  }

  // getTodaysDate() {
  //   const today = new Date();
  //   const date =
  //     today.getFullYear() +
  //     "-" +
  //     ("0" + (today.getMonth() + 1)).slice(-2) +
  //     "-" +
  //     ("0" + today.getDate()).slice(-2);
  //   return date;
  // }




  handleChange(field){
    return (val) => {
       const newState = {...this.state};
       newState[field] = val;
       this.setState(newState)
    }
  }





  // handleSearchByDateRangeChange1(date1) {
  //   this.setState({
  //     ...this.state,
  //     searchByDateRage: {
  //       ...this.state.searchByDateRage,
  //       from: date1
  //     }
  //   });
  // }
  // handleSearchByDateRangeChange2(date2) {
  //   this.setState({
  //     ...this.state,
  //     searchByDateRage: {
  //       ...this.state.searchByDateRage,
  //       till: date2
  //     }
  //   });
  // }



  // getResult(url) {
  //   console.log("search button activated");
  //   this.setState({
  //     ...this.state,
  //     results: {
  //       ...this.state.results,
  //       loading: true
  //     }
  //   });
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/top-headlines?country=${
  //         this.state.SearchByCountry
  //       }&q=${this.state.searchBar}&from=${
  //         this.state.searchByDateRage.from
  //       }&to=${
  //         this.state.searchByDateRage.till
  //       }&domains=${this.state.searchByDomain.join(",")}&language=${
  //         this.state.searchByLanguage
  //       }&sources=${
  //         this.state.searchBySource
  //       }&apiKey=f1841cd7465044d38f5fe573565cb0b5`
  //     )
  //     .then(response => {
  //       if (response.data.articles) {
  //         this.setState({
  //           ...this.state,
  //           results: {
  //             ...this.state.results,
  //             loading: false,
  //             error: false,
  //             data: [...response.data.articles]
  //           }
  //         });
  //         console.log(this.state.results.data);
  //       } else {
  //         this.setState({
  //           ...this.state,
  //           results: {
  //             ...this.state.results,
  //             loading: false,
  //             error: false,
  //             data: []
  //           }
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       this.setState({
  //         ...this.state,
  //         results: {
  //           ...this.state.results,
  //           loading: false,
  //           error: true,
  //           data: []
  //         }
  //       });
  //       throw error;
  //     });
  // }

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault();
          this.props.boundedgetResult(url);
        }}
      >
        <Grid container spacing={3} justify="center">
          <SearchBar
            val={this.state.searchBar}
            change={this.boundHandleChange("searchBar")}
          />
          <SearchByCountry
            val={this.state.searchByCountry}
            change={this.boundHandleChange("searchByCountry")}
          />
          <SearchBySource
            val={this.state.SearchBySource}
            change={this.boundHandleChange('searchBySource')}
          />
          <SearchByDateRange
            val={this.state.searchByDateRage}
            //change1={this.handleSearchByDateRangeChange1.bind(this)}
            //change2={this.handleSearchByDateRangeChange2.bind(this)}
            change={this.boundHandleChange('searchByDateRage')}
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
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
