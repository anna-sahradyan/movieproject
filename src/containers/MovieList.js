import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMovies} from '../redux/response';
import {selectAllMovies} from "../store/allMovieSlice";

const MovieList = () => {
    const movie = useSelector(selectAllMovies);
    const dispatch = useDispatch();
    console.log(movie)
    React.useEffect(() => {
        dispatch(fetchAllMovies())

    }, [dispatch]);

    return (
        <>

        </>
    );
};

export default MovieList;