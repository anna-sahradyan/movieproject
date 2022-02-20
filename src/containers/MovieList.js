import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllMovies} from '../redux/response';
import {selectAllMovies} from "../store/allMovieSlice";
import MovieCard from '../components/MovieCard/MovieCard';
import s from '../components/MovieCard/MovieCard.module.scss';
import axios from 'axios';
import {getAllMoviesSuccess} from '../store/allMovieSlice';
import {API_KEY} from '../data/index'

const MovieList = () => {
    const allMovies = useSelector(selectAllMovies);
    const dispatch = useDispatch();
    console.log(allMovies)
    React.useEffect(() => {
        dispatch(fetchAllMovies());

    }, []);


    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.cardList}>
                {allMovies.Response==='True'? (allMovies.Search.map((item,index)=>{
                    return <MovieCard key={item} data={index} img={item.Poster} title={item.Title} year={item.Year} />
                    })):( <div><h1>{allMovies.Error}</h1></div>)}


                </div>
            </div>
        </div>
    </>);
};

export default MovieList;