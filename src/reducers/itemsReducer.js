import { GET_ITEMS } from "../actions/types";

const INITIAL_STATE = {
    product: {},
};

const getItemReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_ITEMS: 
            return{
                ...state,
                product: payload,
            }
        default:
            return state;
    }
}

export default getItemReducer;