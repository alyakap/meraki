import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
//import axios from "axios"

function SearchBySource({ val, change }) {
  return (
    <Grid item xs={6} style={{ textAlign: "center" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sources</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={e => {
            change(e.target.value);
          }}
        >
          <MenuItem value={10}>CNN</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default SearchBySource;
