//This component should be used to display the view of Bills cards in a nice, scrollable manner.


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));
//Note that the array of integers should be replaced with an array of Bill Cards
//Also note that the 0 and/or  List Header field key should be replaced with an actual header of some sort.
export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>

        <li key={`section-${0}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm sticky ${0}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${0}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>

    </List>
  );
}