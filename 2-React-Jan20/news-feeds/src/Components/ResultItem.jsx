import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';


function  ResultItem() {
    return (
        <Grid item xs={12}> 
        <Card>
          <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              somethjing
            </Typography>
            <Typography  color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              something again
            </Typography>
          </CardContent>
          
        </Card>
        
        </Grid>
        
     
    );
  }
  
export default  ResultItem;