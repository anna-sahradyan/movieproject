import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAllMovies, fetchAsyncAllMovies} from "../store/allMovieSlice";
import {selectAllSeries, fetchAsyncAllSeries} from "../store/allSeriesSlice";
import MovieCard from '../components/MovieCard/MovieCard';
import s from '../components/MovieCard/MovieCard.module.scss';
import axios from 'axios';
import {API_KEY} from '../data/index'

const MovieList = () => {

    const allMovies = useSelector(selectAllMovies);
    const allSeries = useSelector(selectAllSeries);
    const dispatch = useDispatch();
    console.log(allSeries)
    React.useEffect(() => {
        dispatch(fetchAsyncAllMovies());
        dispatch(fetchAsyncAllSeries());
    }, [dispatch]);


    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.cardList}>
                    {allMovies.Response === 'True' ? (allMovies.Search.map((item, index) => {
                        return <MovieCard key={`${item}_${index}`} data={item} img={item.Poster} title={item.Title}
                                          year={item.Year}/>
                    })) : (<div><h1>{allMovies.Error}</h1></div>)}

                    {allSeries.Response === 'True' ? (allSeries.Search.map((item, index) => {
                        return <MovieCard key={`${item}_${index}`} data={item} img={item.Poster} title={item.Title}
                                          imdbID={item.imdbID}
                                          year={item.Year}/>
                    })) : (<div><h1>{allMovies.Error}</h1></div>)}

                </div>
            </div>
        </div>
    </>);
};

export default MovieList;