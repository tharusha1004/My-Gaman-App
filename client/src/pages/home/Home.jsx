import React from 'react'

// import Home styles file
import '../home/Home.css';
//import components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )
}

export default Home