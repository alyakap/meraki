import React from "react";
import Grid from "@material-ui/core/Grid";
import ResultItem from "./ResultItem";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

function Result({ results, pageLoad }) {
  return results.loading ? (
    <LinearProgress />
  ) : results.error ? (
    <Typography gutterBottom variant="body1" component="h5" color="error">
      You are trying to request results too far in the past. Your plan permits
      you to request articles as far back as 2020-01-09. To extend this please
      upgrade to a paid plan.
    </Typography>
  ) : results.data.length ? (
    <Grid container spacing={3} justify="center">
      {results.data.map(item => (
        <ResultItem key={item.title} obj={item} />
      ))}
    </Grid>
  ) : (
    !pageLoad && (
      <Typography gutterBottom variant="body1" component="h5" color="error">
        Your search returns no results
      </Typography>
    )
  );
}

export default Result;
