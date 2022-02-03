import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Header = () => {
    return (
        <>
            <div className={'header'}>
                <NavLink to={'/'}>
                <div className={'logo'}>Movie App </div>
                </NavLink>
                <div className={'user-image'}>
                    <img src='/images/userWoman.png' alt="user" />

                </div>
                <CopyrightIcon/>

            </div>
        </>
    );
};

export default Header;