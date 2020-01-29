import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function SearchByCountry({ val, change }) {
  return (
    <Grid item xs={6} style={{ textAlign: "center" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={e => {
            change(e.target.value);
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="fr">France</MenuItem>
          <MenuItem value="au">Australia</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default SearchByCountry;
