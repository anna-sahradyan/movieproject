import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchAsyncMovieOrSeries, selectMovieOrSeries,removeList} from '../../store/allSeriesSlice';
import s from './MovieDetail.module.scss';
import { Typography } from '@mui/material';
import Loading from '../Loading/index';
const MovieDetail = () => {
    const {imdbID} = useParams();
    let dispatch = useDispatch();
    const data = useSelector(selectMovieOrSeries);
    React.useEffect(() => {
        dispatch(fetchAsyncMovieOrSeries(imdbID));
        return()=>{
            dispatch(removeList());
        }
    }, [dispatch, imdbID]);

    return (

            <div className={s.contentDiv}>
                <div className={s.content}>
                    {Object.keys(data).length===0?
                        (<Loading/>):( <>
                            <div className={s.title}> <Typography variant="h2" component="h3">{data.Title} </Typography>
                        </div>
                    {/*part one */}
                        <div className={s.partOne}>
                        <span>
                        Rating <b>:</b> <img src={'/images/star.png'} alt={'star'} width={30}/>{data.imdbRating}
                        </span>
                        <span>
                        Votes <b>:</b> <img src={'/images/up.png'} alt={'votes'} width={30}/>{data.imdbVotes}
                        </span>
                        <span>Year<b>:</b> <img src={'/images/calendar.png'} alt={'votes'} width={30}/>{data.Year}</span>
                        <span>Runtime<b>:</b><img src={'/images/movie.png'} alt={'movie'} width={20}/>{data.Runtime}</span>
                        </div>

                        <div className={s.description}>
                        <i>{data.Plot}</i>
                        </div>
                        <div className={s.poster}><img src={data.Poster} alt="" width={300}/></div>

                    {/*partTwo*/}

                        <div className={s.partTwo}>
                        <hr/>
                        <b>Director</b><i>
                    {data.Director}
                        </i>

                        <b>Stars</b><i>
                    {data.Actors}
                        </i>
                        <b>Languages</b> <i>
                    {data.Language}
                        </i>
                        <b>Awards</b><i>
                    {data.Awards}
                        </i>

                        </div>
                            </>
                        )}

                </div>
            </div>

   );
};

export default MovieDetail;