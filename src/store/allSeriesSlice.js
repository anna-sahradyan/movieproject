import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from '../data/index';
export const fetchAsyncAllSeries = createAsyncThunk('allMovies/fetchAsyncAllSeries', async function (inputValue, {rejectWithValue}) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${inputValue}&type= series&apikey=${API_KEY}`);
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

        removeList: (state)=>{
            state.movieOrSeries={};
        }
    },
    extraReducers: {
        [fetchAsyncAllSeries.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAsyncAllSeries.fulfilled]: (state, {payload}) => {
            return {...state, allSeries: payload};
            state.status = 'resolved';

        },
        [fetchAsyncAllSeries.reject]: (state,action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
        [fetchAsyncMovieOrSeries.fulfilled]: (state, {payload}) => {
            return {...state, movieOrSeries: payload};
            state.status = 'resolved';

        },
        [fetchAsyncMovieOrSeries.reject]: (state,action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },


    }

});
export const {getAllSeries,  removeList} = allSeriesSlice.actions;
export const selectMovieOrSeries = state => state.movieOrSeries.movieOrSeries;
export const selectAllSeries = state => state.allSeries.allSeries;
export default allSeriesSlice.reducer;
