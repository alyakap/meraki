import React from "react";
import Grid from "@material-ui/core/Grid";
import ResultItem from "./ResultItem";
import LinearProgress from "@material-ui/core/LinearProgress";

function Result({ results }) {
  return results.loading ? (
    <LinearProgress />
  ) : (
    <Grid container spacing={3} justify="center">
      {results.data.map(item => (
        <ResultItem key={item.title} obj={item} />
      ))}
    </Grid>
  );
}

export default Result;
