import {combineReducers} from "redux";
import allMovies from '../store/allMovieSlice';
import allSeries from '../store/allSeriesSlice';
import movieOrSeries from '../store/allSeriesSlice';
const rootReducer = combineReducers({
    allMovies,
    allSeries,
    movieOrSeries,
    devTools: true
});
export default  rootReducer;