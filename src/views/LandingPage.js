import React from 'react';
import Body from '../components/LandingPage/Body';
import NavBar from '../components/NavBar';
import Header from '../components/LandingPage/Header';

const LandingPage = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Body/>
        </div>
    );
};

export default LandingPage;