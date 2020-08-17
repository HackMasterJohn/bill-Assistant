import { createStore, combineReducers} from "redux";


const reducers = {
    //Add Bill to redux store.


    //Delete bill from store.


    //Edit bill from store.


};

// Stores all the functions into one rootReducer object.
const rootReducer = combineReducers(reducers);


//Creates Redux store with the root reducers
export const configureStore = ( ) => createStore (rootReducer);