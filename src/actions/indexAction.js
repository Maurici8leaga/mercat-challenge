import { GET_ITEMS } from "./types";
import axios from 'axios';

export const getItems = () => async dispatch => {

    try{
        const item = await axios.get('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Yu-Gi-Oh!');

        // make a random price for each item
        const randomPrice = () => {
            const max = 1000;
            const min  = 100;
           return  Math.floor(Math.random() * max) + min;
        }

        const itemsWithPrice = item.data.amiibo.map(item => (
            {...item, price: randomPrice()}
        ));
        
        dispatch({
            type: GET_ITEMS,
            payload: itemsWithPrice
        });
    } catch (error){
        console.log('ha ocurrido un error', error);
    }
};


