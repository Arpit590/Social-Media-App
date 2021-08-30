import React from 'react'
import Header from './Header';
import "./Home.css";
import Posts from './Posts';
import Story from './Story';

function Home() {

    return (
        <div className="home">
            <Header/>
            <Story/>
            <Posts/>
        </div>
    )
}

export default Home
