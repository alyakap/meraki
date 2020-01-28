import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from "./SearchBar"
import SearchByCountry from "./SearchByCountry"
import SearchBySource from "./SearchBySource"
import SearchByDateRange from "./SearchByDateRange"
import SearchByLanguage from "./SearchByLanguage"
import SeachByDomain from "./SeachByDomain"
import Button from '@material-ui/core/Button';

function Search() {
    return (
        <form noValidate autoComplete="off">
            <Grid container spacing={4} justify = "center">
                <SearchBar />
                <SearchByCountry />
                <SearchBySource />
                <SearchByDateRange />
                <SearchByLanguage />
                <SeachByDomain />

                <Grid item xs={12} >
                    <Button variant="contained" color="primary" size="large" >
                        Search
                    </Button>
                </Grid>




            </Grid>
        </form>
    );
  }
  
export default Search;