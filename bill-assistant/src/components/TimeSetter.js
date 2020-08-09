//This timeSetter component serves as a way for users to set specific time intervals
//to specifiy recall which bills fall within the date given.

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div> 
      <h3> Time Range</h3>
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="Start Date" label="Start Date" variant="filled" />
      <TextField id="End Date" label="End Date" variant="filled" />
    </form>
    </div>
  );
}