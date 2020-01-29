import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchByDateRange() {
  const today = new Date();
  const date =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
  return (
    <>
      <Grid item xs={6}>
        <TextField
          id="dateFrom"
          label="From"
          fullWidth={true}
          type="date"
          defaultValue="2000-01-01"
          className=""
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          id="dateTill"
          label="To"
          fullWidth={true}
          type="date"
          defaultValue={date}
          className=""
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
    </>
  );
}

export default SearchByDateRange;
