import React from 'react';
import './Footer.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='movieDiv'>Movie App</div>
                <span><CopyrightIcon style={{width:'15px'}} />2022, Movie,Inc.or its affiliates</span>
            </footer>
        </>
    );
};

export default Footer;