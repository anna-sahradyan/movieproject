import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from '../data/index';


export const fetchAsyncAllMovies = createAsyncThunk("allMovies/fetchAsyncAllMovies", async (allMovies) => {
    const response = await axios.get(`http://www.omdbapi.com/?s='Movies'&type=movie&apikey=${API_KEY}`,allMovies);
    console.log(response.data)
    return response.data;

});

const allMovieSlice = createSlice({
    name: "allMovies",
    initialState: {
        allMovies: {},

    },
    reducers: {
        getAllMovies: (state, {payload}) => {
            state.allMovies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncAllMovies.pending]: () => {
            console.log('pending');
        },
        [fetchAsyncAllMovies.fulfilled]: (state, {payload}) => {
            console.log('fulfilled');
            return {...state, allMovies: payload};

        },
        [fetchAsyncAllMovies.rejected]:() => {
            console.log('rejected');


        },
    },

});
export const {getAllMovies} = allMovieSlice.actions;
export const selectAllMovies = state => state.allMovies.allMovies;
export default allMovieSlice.reducer;