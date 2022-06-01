import { combineReducers } from "redux";
import itemsReducer from './itemsReducer';

const  indexReducer = combineReducers({
    item: itemsReducer,
});

export default indexReducer;
