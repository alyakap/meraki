import React from "react";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      data: []
    };
    console.log("heyyy", this.props.val);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true
    });

    axios
      .get(
        `https://newsapi.org/v2/sources?apiKey=f1841cd7465044d38f5fe573565cb0b5`
      )
      .then(response => {
        if (response.data.sources) {
          this.setState({
            ...this.state,
            error: false,
            loading: false,
            data: [...response.data.sources]
          });
        } else {
          this.setState({
            ...this.state,
            error: false,
            loading: false,
            data: []
          });
        }
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: true,
          loading: false
        });
        throw error;
      });
  }

  render() {
    return (
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sources</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.val}
            onChange={e => {
              this.props.change(e.target.value);
            }}
          >
            <MenuItem value="">None</MenuItem>
            {this.state.data.map(source => (
              <MenuItem value={source.id} key={source.id}>
                {source.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }
}
