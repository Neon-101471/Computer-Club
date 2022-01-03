import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import RecentEvents from '../RecenEvents/RecentEvents';
import Workshops from '../Workshops/Workshops';

const Home = () => {
    return (
        <div className='my-5'>
            <Workshops></Workshops>
            <RecentEvents></RecentEvents>
            <ContactInfo />
        </div>
    );
};

export default Home;