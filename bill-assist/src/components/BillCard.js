//This Component serves as a way to view a bill, displaying the source, 
//soruce site, due date, cost, and personal notes

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//Props should be passed down to display dynamic data for this bill card component.
export default function BillCard() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Bill name Here
        </Typography>
        <Typography variant="h5" component="h2">
          $55
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date Due: Aug 2
        </Typography>
        <Typography variant="body2" component="p">
          Notes: 
          <br />
          {'Insert Perosnal Notes Here:'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Company Site Name</Button>
      </CardActions>
    </Card>
  );
}
