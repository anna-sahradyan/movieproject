import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from '../data/index';


export const fetchAsyncAllSeries = createAsyncThunk("allMovies/fetchAsyncAllSeries", async (allSeries) => {
    const response = await axios.get(`http://www.omdbapi.com/?s='Troy'&type= series&apikey=${API_KEY}`, allSeries);
    console.log(response.data)
    return response.data;

});
// export const fetchAsyncMovieOrSeries = createAsyncThunk("movieOrSeries/ fetchAsyncMovieOrSeries", async (id) => {
//     const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&Plot=full`);
// console.log(response.data)
//     return response.data;
//
//
// });
export const fetchAsyncMovieOrSeries = createAsyncThunk('movieOrSeries/fetchAsyncMovieOrSeries', async function (id, {rejectWithValue}) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&Plot=full`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }

});

const allSeriesSlice = createSlice({
    name: 'allSeries',
    initialState: {
        allSeries: {},
        movieOrSeries: {},
        status: null,
        error: null,
    },
    reducers: {
        getAllSeries: (state, {payload}) => {
            state.allSeries = payload;
        },
        getMovieOrSeries: (state, {payload}) => {
            state.MovieOrSeries = payload;
        },

    },
    extraReducers: {
        [fetchAsyncAllSeries.pending]: () => {
            console.log('pending series')
        },
        [fetchAsyncAllSeries.fulfilled]: (state, {payload}) => {
            return {...state, allSeries: payload};
            state.status = 'resolved';

        },
        [fetchAsyncAllSeries.reject]: () => {
            console.log('rejected series')
        },
        [fetchAsyncMovieOrSeries.fulfilled]: (state, {payload}) => {
            return {...state, movieOrSeries: payload};
            state.status = 'resolved';

        },
        [fetchAsyncMovieOrSeries.reject]: () => {
            console.log('rejected series')
        },


    }

});
export const {getAllSeries,getMovieOrSeries} = allSeriesSlice.actions;
export const selectMovieOrSeries = state => state.movieOrSeries.movieOrSeries;
export const selectAllSeries = state => state.allSeries.allSeries;
export default allSeriesSlice.reducer;
