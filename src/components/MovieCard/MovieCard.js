import React from 'react';
import s from './MovieCard.module.scss';
import { motion } from "framer-motion"
const MovieCard = (props) => {

    return (

            <motion.div className={s.card} whileHover={{ scale: 1.03 }}  >
                <img src={props.img} alt=""/>
                <h5>{props.title}</h5>
                <h6>{props.year}</h6>

            </motion.div>


    );
};

export default MovieCard;