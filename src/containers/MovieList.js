import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectAllMovies, fetchAsyncAllMovies} from "../store/allMovieSlice";
import {selectAllSeries, fetchAsyncAllSeries} from "../store/allSeriesSlice";
import MovieCard from '../components/MovieCard/MovieCard';
import s from '../components/MovieCard/MovieCard.module.scss';
import axios from 'axios';
import {API_KEY} from '../data/index'
import Slider from "react-slick";
import {settings} from "../common/settings";

const MovieList = () => {
    const allMovies = useSelector(selectAllMovies);
    const allSeries = useSelector(selectAllSeries);
    const dispatch = useDispatch();
    const movieText = 'Troy';
    const seriesText = 'Batman';
    React.useEffect(() => {
        dispatch(fetchAsyncAllMovies(movieText));
        dispatch(fetchAsyncAllSeries(seriesText));
    }, [dispatch]);

    return (<>
        <div className={s.contentDiv}>
            <div className={s.content}>
                <div className={s.cardList}>
                    <Slider {...settings}>{allMovies.Response === 'True' ? (allMovies.Search.map((item, index) => {
                        return <MovieCard key={`${item}_${index}`} data={item} img={item.Poster} title={item.Title}
                                          year={item.Year}/>
                    })) : (<div><h1>{allMovies.Error}</h1></div>)}</Slider>

                    <Slider {...settings}> {allSeries.Response === 'True' ? (allSeries.Search.map((item, index) => {
                        return <MovieCard key={`${item}_${index}`} data={item} img={item.Poster} title={item.Title}
                                          imdbID={item.imdbID}
                                          year={item.Year}/>
                    })) : (<div><h1>{allMovies.Error}</h1></div>)}</Slider>

                </div>
            </div>
        </div>
    </>);
};

export default MovieList;