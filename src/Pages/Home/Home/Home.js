import React from 'react';
import RecentEvents from './RecenEvents/RecentEvents';
import Workshops from './Workshops/Workshops';
const Home = () => {
    return (
        <div>
            <h2 className='fw-bolder text-center'>This is home page!!</h2>
            <Workshops></Workshops>
            <RecentEvents></RecentEvents>
        </div>
    );
};

export default Home;