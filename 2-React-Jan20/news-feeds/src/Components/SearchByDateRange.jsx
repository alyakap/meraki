import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchByDateRange({ val, change1, change2 }) {
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
          className=""
          InputLabelProps={{
            shrink: true
          }}
          value={date || val.from}
          onChange={e => {
            change1(e.target.value);
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
          value={date || val.till}
          onChange={e => {
            change2(e.target.value);
          }}
        />
      </Grid>
    </>
  );
}

export default SearchByDateRange;
