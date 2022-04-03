import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from '../data/index';
export const fetchAsyncAllMovies  = createAsyncThunk('allMovies/fetchAsyncAllMovies ', async function (inputValue, {rejectWithValue}) {
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${inputValue}&type=movie&apikey=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Server Error!');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }

});

const allMovieSlice = createSlice({
    name: "allMovies",
    initialState: {
        allMovies: {},
        status: null,
        error: null,

    },
    reducers: {
        getAllMovies: (state, {payload}) => {
            state.allMovies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncAllMovies.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchAsyncAllMovies.fulfilled]: (state, {payload}) => {
            return {...state, allMovies: payload};

        },
        [fetchAsyncAllMovies.rejected]:(state,action) => {
            state.status = 'rejected';
            state.error = action.payload;

        },
    },

});
export const {getAllMovies} = allMovieSlice.actions;
export const selectAllMovies = state => state.allMovies.allMovies;
export default allMovieSlice.reducer;