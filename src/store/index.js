import {combineReducers} from "redux";
import allMovies from '../store/allMovieSlice';
const rootReducer = combineReducers({
    allMovies,
    devTools: true
});
export default  rootReducer;