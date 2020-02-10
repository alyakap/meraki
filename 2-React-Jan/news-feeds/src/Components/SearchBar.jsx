import React from "react";
import { Grid, TextField } from "@material-ui/core";

function SearchBar({ val, change }) {
  return (
    <Grid item xs={12}>
      <TextField
        id="outlined-full-width"
        label="Search"
        placeholder="Seach by tag"
        fullWidth
        margin="normal"
        value={val}
        onChange={e => {
          change(e.target.value);
        }}
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
    </Grid>
  );
}

export default SearchBar;
