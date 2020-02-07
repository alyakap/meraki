import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchByDateRange({ val, change }) {
  // const today = new Date();
  // const date =
  //   today.getFullYear() +
  //   "-" +
  //   ("0" + (today.getMonth() + 1)).slice(-2) +
  //   "-" +
  //   ("0" + today.getDate()).slice(-2);
  console.log(val);
  return (
    <>
      <Grid item xs={6}>
        <TextField
          id="dateFrom"
          label="From"
          fullWidth={true}
          type="date"
          className=""
          InputLabelProps={{
            shrink: true
          }}
          value={val.from}
          onChange={e => {
            console.log(e.target.value);
            change(e.target.value);
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          id="dateTill"
          label="To"
          fullWidth={true}
          type="date"
          className=""
          InputLabelProps={{
            shrink: true
          }}
          value={val.till}
          //inputProps={{ min: ShouldBeFormatted(val.from)}}
          onChange={e => {
            console.log(e.target.value);
            change(e.target.value);
          }}
        />
      </Grid>
    </>
  );
}

export default SearchByDateRange;
