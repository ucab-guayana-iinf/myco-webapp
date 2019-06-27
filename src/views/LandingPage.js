import React from 'react';
import Body from '../components/LandingPage/Body';
import Header from '../components/LandingPage/Header';
import MainSidebar from '../components/Utilities/MainSidebar/MainSidebar'
import NavBar from '../components/Utilities/NavBar/NavBar'
const LandingPage = () => {
    return (
        <div className="landing">
			<NavBar/>
			<MainSidebar/>
            <Header/>
            <Body/>
        </div>
    );
};

export default LandingPage;