import {combineReducers} from "redux";
import allMovies from '../store/allMovieSlice';
import allSeries from '../store/allSeriesSlice';
const rootReducer = combineReducers({
    allMovies,
    allSeries,
    devTools: true
});
export default  rootReducer;