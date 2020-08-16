//This showBillsViewPage component serves as a space to redner the list of bills from a certain time frame.

import React from 'react';
import TimeSetter from "./TimeSetter";
import BillList from "./BillsListContainer";
import  billsData from "../data/BillsData.json";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


/*This class keeps track of the start & end date of the user entry.
For every entry with the given bounds, the page renders bills that fall
in the specified range.*/

class ShowBillsView extends React.Component{
    constructor (props){
        super (props);
        this.state = {start: 0, end: 0};
    }

    submit (){
        
        this.setState ({start: parseInt (document.getElementById("Start Date").value), 
        end: parseInt (document.getElementById("End Date").value) })


    }

    render (){

       return( 
        <div>
            <div style={{textAlign:"center"}}>

                <div> 
                    <h3> Time Range</h3>
                    <form style={{    '& > *': {margin: 1, width: '25ch'} }} noValidate autoComplete="off">

                    <TextField id="Start Date" label="Start Date" variant="filled"/>
                    <TextField id="End Date" label="End Date" variant="filled" />
                    <Button onClick={ e => {e.preventDefault(); this.submit()}} variant="contained" size="large" color="primary" style={{margin: 1}}>
                    Refresh
                    </Button>

                    </form>
                    
                </div>

            </div>
            
            <div>
                <BillList billList={billsData.billsDB} startDate={this.state.start} endDate={this.state.end}/> 
            </div>

       </div>
    );
    }


}

export default ShowBillsView;