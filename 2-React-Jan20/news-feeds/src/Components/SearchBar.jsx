import React from "react";
import { Grid, TextField } from "@material-ui/core";

function SearchBar() {
  return (
    <Grid item xs={12}>
      <TextField
        id="outlined-full-width"
        label="Search"
        style={{ margin: 8 }}
        placeholder="Seach by tag"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
    </Grid>
  );
}

export default SearchBar;
