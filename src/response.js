import {getAllMovies,getAllMoviesSuccess,getAllMoviesFailure} from './store/allMovieSlice';
import axios from "axios";




export const fetchAllMovies = () => (dispatch) => {
    dispatch(getAllMovies())
    try {
        axios.get(`http://www.omdbapi.com/?apikey=b7345a33&s='Family Movies'&type=movie`).then(({data})=>{
            dispatch(getAllMoviesSuccess(data))
        })
    }
    catch (error){
        dispatch(getAllMoviesFailure())
    }
}