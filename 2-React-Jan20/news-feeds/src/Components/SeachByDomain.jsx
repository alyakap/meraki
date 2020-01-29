import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

function SearchByDomain({ val, change }) {
  return (
    <Grid item xs={6}>
      <FormControl component="fieldset" className="">
        <FormLabel component="legend">Domain</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    val.push(e.target.value);
                  } else {
                    let index = val.indexOf(e.target.value);
                    val.splice(index, 1);
                  }
                  change(val);
                }}
                value="euronews.com"
              />
            }
            label="EuroNews"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    val.push(e.target.value);
                  } else {
                    let index = val.indexOf(e.target.value);
                    val.splice(index, 1);
                  }
                  change(val);
                }}
                value="cnn.com"
              />
            }
            label="CNN"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    val.push(e.target.value);
                  } else {
                    let index = val.indexOf(e.target.value);
                    val.splice(index, 1);
                  }
                  change(val);
                }}
                value="nytimes.com"
              />
            }
            label="NYTimes"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => {
                  if (e.target.checked) {
                    val.push(e.target.value);
                  } else {
                    let index = val.indexOf(e.target.value);
                    val.splice(index, 1);
                  }
                  change(val);
                }}
                value="demorgen.be"
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
