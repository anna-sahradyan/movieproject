import {getAllMovies,getAllMoviesSuccess,getAllMoviesFailure} from '../store/allMovieSlice';
import axios from "axios";
import {API_KEY} from '../data/index';




export const fetchAllMovies = () => (dispatch) => {
    dispatch(getAllMovies())
    try {
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s='Family Movies'&type=movie`).then(({data})=>{
            dispatch(getAllMoviesSuccess(data))
        })
    }
    catch (error){
        dispatch(getAllMoviesFailure())
    }
}