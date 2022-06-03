import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import indexReducer from './indexReducer';
import { SET_CART } from '../actions/types';

// Convert cart to string and store in localStorage
function saveCartToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state.item.cart);
        localStorage.setItem("persistant_cart_state", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromCartLocalStorage(store) {

    try {
        const serialisedState = localStorage.getItem("persistant_cart_state");
        const cart = JSON.parse(serialisedState);

        if (!Array.isArray(cart)) return;

        store.dispatch({
            type: SET_CART,
            payload: {
                cart
            }
        })
        return {};
    } catch (e) {
        console.warn('Problem getting cart state from localStorage');
    }
}

const store = createStore(
    indexReducer,
    applyMiddleware(reduxThunk)
);

// Load possible stored cart in localStorage
loadFromCartLocalStorage(store);

store.subscribe(() => saveCartToLocalStorage(store.getState()));

export default store;