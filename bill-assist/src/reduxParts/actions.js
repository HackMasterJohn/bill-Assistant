// This defines the types of actions that may be applied on the redux store.




export  const ADD_BILL = "ADD_BILL";
export const addBill = data => ({

    //The data field should be an object containing a name, dueDate, and a cost.
    //Used to add a bill to the redux store.
    type : ADD_BILL,
    payload: { data }

})

export const EDIT_BILL = "EDIT_BILL";
export const editBill = data => ({

    //The data field should be an object containing a name & dueDate, to identify the bill to be edited.
    //Used to add a bill to the redux store.
    type : EDIT_BILL,
    payload: { data }

})

export const DELETE_BILL = "DELET_BILL";
export const deleteBill = data => ({

    //The data field should be an object containing a name & dueDate, to identify the bill to be edited.
    //Used to add a bill to the redux store.
    type : DELETE_BILL ,
    payload: { data }

})


