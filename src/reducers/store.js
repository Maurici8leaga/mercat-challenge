import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import  reduxThunk from 'redux-thunk';
import indexReducer from './indexReducer';

const INITIAL_STATE = {};
const store = createStore(
    indexReducer,
    INITIAL_STATE,
    applyMiddleware(reduxThunk)
);

export default store;