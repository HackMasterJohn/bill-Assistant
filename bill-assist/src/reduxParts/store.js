import { createStore, combineReducers} from "redux";
import { billsManager } from "./reducers"; //Imports Bill Mnager reducer to be stored in the root reducers.

const reducers = {

    billsManager,


};

// Stores all the functions into one rootReducer object.
const rootReducer = combineReducers(reducers);


//Creates Redux store with the root reducers
export const configureStore = ( ) => createStore (rootReducer);