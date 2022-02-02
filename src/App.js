import React from 'react';
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
import ErrorPage from "./components/Error";
import Header from "./components/Header";


const App = () => {
    return (

        <>
            <div className={'wrapper'}>
            <Header/>
                <div className={'main'}>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path={'/movie/:imdbID'} element={<MovieDetails/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
                </div>
                <Footer/>
        </div>

        </>
    );
};

export default App;