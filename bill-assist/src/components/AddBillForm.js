//This addFrom component was made to allow for users to add bills to their database of bills
//to keep track of.

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
    <form className={classes.root} noValidate autoComplete="off">

      <TextField id="Bill Name" label="Bill Name" variant="filled" />
      <TextField id="Due Date" label="Due Date" variant="filled" />
      <TextField id="Cost" label="Cost $" variant="filled" />
    </form>
  );
}