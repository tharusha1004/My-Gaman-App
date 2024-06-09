import React from 'react'

// import Home styles file
import '../home/Home.css';
//import components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured/>
            </div>
        </div>
    )
}

export default Home