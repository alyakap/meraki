import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

function SearchByDomain() {
  return (
    <Grid item xs={6}>
      <FormControl component="fieldset" className="">
        <FormLabel component="legend">Sources</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                //onChange="{handleChange('gilad')}"
                value="euronews"
              />
            }
            label="EuroNews"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                //onChange="{handleChange('jason')}"
                value="bcc"
              />
            }
            label="BBC"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                //onChange="{handleChange('antoine')}"
                value="nytimes"
              />
            }
            label="NYTimes"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={false}
                //onChange="{handleChange('antoine')}"
                value="demorgen"
              />
            }
            label="De Morgen"
          />
        </FormGroup>
      </FormControl>
    </Grid>
  );
}

export default SearchByDomain;
