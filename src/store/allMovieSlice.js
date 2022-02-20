import {createSlice} from "@reduxjs/toolkit";

const allMovieSlice = createSlice({
    name: "allMovies",
    initialState: {
        allMovies: {},
        loading: false,
        hasErrors: false,
    },
    reducers: {
        getAllMovies: state => {
            state.loading = true
        },
        getAllMoviesSuccess: (state, {payload}) => {
            state.allMovies = payload
            state.loading = false
            state.hasErrors = true

        },
        getAllMoviesFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    }
});
export const {getAllMovies, getAllMoviesSuccess, getAllMoviesFailure} = allMovieSlice.actions;
export const selectAllMovies = state => state.allMovies.allMovies;
export default allMovieSlice.reducer;