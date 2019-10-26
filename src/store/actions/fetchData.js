import * as actionTypes from './actionTypes';
import axios from 'axios';

// import axios from '../../axios.config';

export const fetchData = (query) => {
    return (dispatch, getState) => {
        const state = getState();
        axios.get(`${process.env.API_URL}${state.URL[query][1]}`)
            .then(res => {
                dispatch({ type: actionTypes.FETCH_DATA, payload: res });
                
            }).catch(err => {
                console.log(err);
            });

    }
}