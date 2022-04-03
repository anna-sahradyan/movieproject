import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import './Header.scss';
import CopyrightIcon from '@mui/icons-material/Copyright';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useDispatch} from "react-redux";
import { fetchAsyncAllMovies} from "../../store/allMovieSlice";
import { fetchAsyncAllSeries} from "../../store/allSeriesSlice";

const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputValue === ""){
            return false;
        }
        else{
            dispatch(fetchAsyncAllMovies(inputValue));
            dispatch(fetchAsyncAllSeries(inputValue));
            setInputValue("");
        }

    }
    return (<>
        <div className={'header'}>
            <NavLink to={'/'}>
                <div className={'logo'}>Movie App</div>
            </NavLink>
            <div className={'input'}>
                <form onClick={submitHandler}>
                    <Box
                        sx={{
                            width: 500, maxWidth: '100%',
                        }}
                    >
                        <TextField fullWidth label="search movie" id="fullWidth" style={{backgroundColor: "#CBCBCB"}}
                                   autoFocus
                                   value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                        <IconButton type="submit" sx={{p: '10px'}} aria-label="search"
                                    style={{marginLeft: "450px", marginTop: "-80px", position: "absalute", zIndex: 2}}>
                            <SearchIcon/>
                        </IconButton>

                    </Box>
                </form>
            </div>
            <div className={'user-image'}>
                <img src='/images/userWoman.png' alt="user"/>
            </div>
            <CopyrightIcon/>

        </div>
    </>);
};

export default Header;