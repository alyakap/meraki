import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";

function SearchByLanguage() {
  return (
    <Grid item xs={6}>
      <FormControl component="fieldset" className="">
        <FormLabel component="legend">Language</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value=""
          //onChange=""
        >
          <FormControlLabel
            value="English"
            control={<Radio />}
            label="English"
          />
          <FormControlLabel value="Dutch" control={<Radio />} label="Dutch" />
          <FormControlLabel value="French" control={<Radio />} label="French" />
          <FormControlLabel
            value="Turkish"
            control={<Radio />}
            label="Turkish"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

export default SearchByLanguage;
