import * as actionTypes from './actionTypes';
import axios from 'axios';

// import axios from '../../axios.config';

export const searchQuery = (query) => {
    return (dispatch, getState) => {
        let state = getState();
        const artist = `${process.env.API_URL}${state.searchURL.artist}`.replace('$#ARTIST#$', query);;
        const album = `${process.env.API_URL}${state.searchURL.album}`.replace('$#ALBUM#$', query);
        const track = `${process.env.API_URL}${state.searchURL.track}`.replace('$#TRACK#$', query);
        let data = [];

        axios.all([axios.get(artist), axios.get(album), axios.get(track)])
            .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
                data.push(firstResponse.data, secondResponse.data, thirdResponse.data);
                dispatch({ type: actionTypes.SEARCH, payload: data, query });
            }))
            .catch(error => console.log(error));
    }
}