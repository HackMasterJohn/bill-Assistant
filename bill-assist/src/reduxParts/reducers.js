import { DELETE_BILL, EDIT_BILL, ADD_BILL }  from "./actions";
import billsData from "../data/BillsData.json";

//Sets the defualt state of the redux store
const origState = billsData.billsDB;


export const billsManager = ( state = origState, action) => {
    const { type, payload } = action;

    switch (type){

    
    //Used to add a bill to the store
    case ADD_BILL: {
        const { data } = payload; //Destructures the object from the payload field.

        //There should be some sort of checking here, but for now we assume that the obejct given is a proper bill object.
        return state.concat( data );


    }

    //Used to delete a bill from the store when given the name and due date.
    case DELETE_BILL : {

        const { data } = payload;
        const name = data [ 0];
        const dueDate = data [ 1 ]; 

        //Returns array of bills where the bill name and bill due date did not match the one to be deleted.
        return state.fiter ( billData => billData.name !== name & billData.dueDate !== dueDate );


    }

    case EDIT_BILL : {
        const { data } = payload;
        const name = data [ 0];
        const dueDate = data [ 1 ]; 
        const newBill = data [ 2 ]; // This should be an object.

        //Returns array of bills where the bill name and bill due date did not match the one to be deleted.
        //And adds the new bill to the array of bills.
        return state.fiter ( billData => billData.name !== name & billData.dueDate !== dueDate ).concat (newBill);
        

    }

    default:

        return state;

    }

    

}