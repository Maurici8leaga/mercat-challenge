import { GET_ITEMS, ADD_TO_CART, DELETE_FROM_CART, ADJUST_QTY, SET_CART } from "./types";
import axios from 'axios';

// request data to API
export const getItems = () => async dispatch => {
    try {
        const item = await axios.get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Yu-Gi-Oh!');

        // make a random id for each item
        const randomId = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        // make a random price for each item
        const randomPrice = () => {
            const max = 1000;
            const min = 100;
            return Math.floor(Math.random() * max) + min;
        }

        const itemUpdate = item.data.amiibo.map(item => (
            { ...item, id: randomId(), price: randomPrice() }
        ));

        dispatch({
            type: GET_ITEMS,
            payload: itemUpdate
        });
    } catch (error) {
        console.log(error);
    }
};

// add item to shopping cart
export const addCart = (itemID) => async dispatch => {
    try {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id: itemID
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// remove item from cart
export const deleteItem = (itemID) => async dispatch => {
    try {
        dispatch({
            type: DELETE_FROM_CART,
            payload: {
                id: itemID
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// adjust the quantity of items in the cart
export const adjustQty = (itemID, value) => async dispatch => {
    try {
        dispatch({
            type: ADJUST_QTY,
            payload: {
                id: itemID,
                qty: value
            }
        })
    } catch (error) {
        console.log(error);
    }
}

// set shopping cart
export const setCart = (cart) => async dispatch => {
    try {
        dispatch({
            type: SET_CART,
            payload: cart
        })
    } catch (error) {
        console.log(error);
    }
}
