import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchAsyncMovieOrSeries,selectMovieOrSeries} from '../../store/allSeriesSlice';

const MovieDetail = () => {
    const {imdbID} = useParams();
    let dispatch = useDispatch();
    const movieOrSeries = useSelector(selectMovieOrSeries);
    console.log(movieOrSeries);
    React.useEffect(() => {
        dispatch(fetchAsyncMovieOrSeries(imdbID))
    }, [dispatch, imdbID]);
    return (
        <>
            <div>

            </div>
        </>
    );
};

export default MovieDetail;