import React from 'react';
import s from './MovieCard.module.scss';

const MovieCard = (props) => {

    return (

            <div className={s.card}>
                <img src={props.img} alt=""className={s.poster}/>
                <h5 className={s.title}>{props.title}</h5>
                <h6 className={s.year}>{props.year}</h6>

            </div>


    );
};

export default MovieCard;