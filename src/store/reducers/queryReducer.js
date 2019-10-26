import * as actionTypes from '../actions/actionTypes';

const initialState = {
    URL: { // ['heading', 'URL', 'first Color', 'second Color']
        topTags: ['Top10 Tags', `?method=chart.gettoptags&api_key=${process.env.API_KEY}&format=json`, '#EDF5E1', '#8EE4AF'],
        topTracks: ['Top10 Tracks', `?method=chart.gettoptracks&api_key=${process.env.API_KEY}&format=json`, '#05386B', '#E3E2DF'],
        topAlbums: ['Top10 Albums(jB)', `?method=artist.gettopalbums&artist=justinbieber&api_key=${process.env.API_KEY}&format=json`, '#1A1A1D', '#4E4E50'],
        topArtists: ['Top10 Artists', `?method=chart.gettopartists&api_key=${process.env.API_KEY}&format=json`, '#0B0C10', '#1F2833']
    },
    searchURL: {
        artist: `?method=artist.search&artist=$#ARTIST#$&api_key=${process.env.API_KEY}&format=json`,
        album: `?method=album.search&album=$#ALBUM#$&api_key=${process.env.API_KEY}&format=json`,
        track: `?method=track.search&track=$#TRACK#$&api_key=${process.env.API_KEY}&format=json`
    },
    fetched: false,
    data: null,
    history: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA: {
            return { ...state, fetched: true, data: action.payload.data };
        }
        case actionTypes.SEARCH: {
            const history = state.history.concat(action.query);
            return {
                ...state, fetched: true, data: action.payload, history
            }
        }
        default:
            return state;
    }
}

export default reducer;