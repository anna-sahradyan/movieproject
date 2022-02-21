import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {API_KEY} from '../data/index';


export const fetchAsyncAllSeries = createAsyncThunk("allMovies/fetchAsyncAllShows", async (allSeries) => {
    const response = await axios.get(`http://www.omdbapi.com/?s='Troy'&type= series&apikey=${API_KEY}`, allSeries);
    console.log(response.data)
    return response.data;

});
const allSeriesSlice = createSlice({
    name: 'allSeries',
    initialState: {
        allSeries: {},
    },
    reducers: {
        getAllSeries: (state, {payload}) => {
            state.allSeries = payload;
        },

    },
    extraReducers: {
        [fetchAsyncAllSeries.pending]: () => {
            console.log('pending series')
        },
        [fetchAsyncAllSeries.fulfilled]: (state, {payload}) => {
            return {...state, allSeries: payload};
            console.log('fulfilled series')
        },
        [fetchAsyncAllSeries.reject]: () => {

            console.log('rejected series')
        },

    }

});
export const {getAllSeries} = allSeriesSlice.actions;
export const selectAllSeries = state => state.allSeries.allSeries;
export default allSeriesSlice.reducer;
