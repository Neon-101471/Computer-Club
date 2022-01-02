import React from 'react';
import RecentEvents from './RecenEvents/RecentEvents';
import Workshops from './Workshops/Workshops';

const Home = () => {
    return (
        <div>
            <Workshops></Workshops>
            <RecentEvents></RecentEvents>
          
        </div>
    );
};

export default Home;