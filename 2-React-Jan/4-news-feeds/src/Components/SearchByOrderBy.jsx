import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function SearchByOrderBy({ val, change }) {
  return (
    <Grid item xs={6} style={{ textAlign: "center" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          onChange={e => {
            change(e.target.value);
          }}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="relevancy">Relevancy</MenuItem>
          <MenuItem value="publishedAt">Published At</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}

export default SearchByOrderBy;
