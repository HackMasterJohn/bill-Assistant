//This component should be used to display the view of Bills cards in a nice, scrollable manner.


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import BillCard from "./BillCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 700,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
    display: "flex",
    flexDirection: "wrap"
  },
}));
//Note that the array of integers should be replaced with an array of Bill Cards
//Also note that the 0 and/or  List Header field key should be replaced with an actual header of some sort.
export default function BillList( props) {
  const classes = useStyles();
  const billsList = props.billList;

  var startDate  = props.startDate;
  var endDate = props.endDate;

console.log ("hellko");

  return (
    <List className={classes.root} >

          <div >
            <ListSubheader>{`Bills`}</ListSubheader>
            
            {billsList.filter(bill => bill.dueDate >= startDate & bill.dueDate <= endDate)
            .map((item) => (
            
              <ListItem key={`item-${0}-${item}`}>
                <BillCard billName={item.name} dueDate={item.dueDate} cost={item.cost}/>
              </ListItem>
            ))}
          </div>


    </List>
  );
}
