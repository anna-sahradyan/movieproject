import React from 'react';
import s from './MovieCard.module.scss';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
    const {data} = props;
    return (

        <motion.div className={s.card} whileHover={{scale: 1.03}}>
            <Link to={`/movie/:${props.imdbID}`}>
                <img src={props.img} alt=""/>
                <h5>{props.title}</h5>
                <h6>{props.year}</h6>
            </Link>
        </motion.div>


    );
};

export default MovieCard;