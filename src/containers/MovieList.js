import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMovies} from '../redux/response';
import {selectAllMovies} from "../store/allMovieSlice";
import MovieCard from '../components/MovieCard'
import s from './MovieList.module.scss';
const MovieList = () => {
    const movies = useSelector(selectAllMovies);
    const dispatch = useDispatch();

    let renderMovies = "";
    React.useEffect(() => {
        dispatch(fetchAllMovies());

    }, [dispatch]);

    renderMovies = movies.Response === 'true' ? (movies.Search.map((item, index) => {
        <MovieCard key={`${item}_${index}`} data={item}/>
    })) : (<div><h1>{movies.Error}</h1></div>);
    return (
        <>
            <div className={s.contentDiv}>
                <div>

                </div>
            </div>
        </>
    );
};

export default MovieList;