import {getAllMovies,getAllMoviesSuccess,getAllMoviesFailure} from '../store/allMovieSlice';
import axios from "axios";
import {API_KEY} from '../data/index';

export const fetchAllMovies = () => (dispatch) => {
    dispatch(getAllMovies())
    try {
        axios.get(`http://www.omdbapi.com/?s='Movies'&type=movie&apikey=${API_KEY}`).then(({data})=>{
            dispatch(getAllMoviesSuccess(data))

        })
    }
    catch (error){
        dispatch(getAllMoviesFailure())

    }
}