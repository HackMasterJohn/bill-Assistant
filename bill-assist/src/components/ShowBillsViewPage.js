//This showBillsViewPage component serves as a space to redner the list of bills from a certain time frame.

import React from 'react';
import TimeSetter from "./TimeSetter";
import BillList from "./BillsListContainer";

class ShowBillsView extends React.Component{
    constructor (props){
        super (props);
        this.state = {};
    }


    render (){
       return( 
        <div>
            <div style={{textAlign:"center"}}>
                <TimeSetter/>
            </div>
            
            <div>
                <BillList />
            </div>

       </div>
    );
    }


}

export default ShowBillsView;