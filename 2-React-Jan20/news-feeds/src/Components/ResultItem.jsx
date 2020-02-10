import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30
  },
  media: {
    height: 200
  }
});

function ResultItem({ obj }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia image={obj.urlToImage} className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {obj.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {obj.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={obj.url} rel="noopener" target="_blank">
          <ChevronRightIcon />
        </Link>
      </CardActions>
    </Card>
  );
}

export default ResultItem;
