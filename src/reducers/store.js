import { legacy_createStore as createStore} from 'redux';
import indexReducer from './indexReducer';

const store = createStore(indexReducer);

export default store;