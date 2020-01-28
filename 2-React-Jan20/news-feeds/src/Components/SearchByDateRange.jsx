import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


function SearchByDateRange() {
    return (
        <>
        <Grid item xs={6} style={{textAlign: "center"}}>
        <TextField
            id="date"
            label="From"
            type="date"
            defaultValue="2017-05-24"
            className=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={6} style={{textAlign: "center"}}>
        <TextField
            id="date"
            label="To"
            type="date"
            defaultValue="2017-05-24"
            className=""
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        </>
    );
  }
  
export default SearchByDateRange;