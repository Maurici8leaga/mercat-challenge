import { GET_ITEMS } from "./types";
import axios from 'axios';

export const getItems = () => async dispatch => {

    try{
        const item = await axios.get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Yu-Gi-Oh!');
        
        dispatch({
            type: GET_ITEMS,
            payload: item.data
        });
    } catch (error){
        console.log('ha ocurrido un error', error);
    }
};