import { GET_ITEMS, ADD_TO_CART, DELETE_FROM_CART, ADJUST_QTY } from "../actions/types";

const INITIAL_STATE = {
    product: {},
    cart:[],
};

const getItemReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    const {cart} = state;

    console.log(cart, 'esto es cart');

    switch(type){
        case GET_ITEMS: 
        return{
            ...state,
            product: payload,
            };
        case ADD_TO_CART:
            // get item
            const item = state.product.find((product) => product.id === payload.id);
            // check 
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);

            return{
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === payload.id ? {...item, qty: item.qty + 1} : item) : [
                    ...state.cart, {...item, qty: 1}],
            };
        case DELETE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
            };
        case ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map((item) => item.id === payload.id ? {
                    ...item, qty: +payload.qty
                } : item)
            };
        default:
            return state;
    }
}

export default getItemReducer;