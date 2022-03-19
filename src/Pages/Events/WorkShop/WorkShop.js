import React from 'react';
import './WorkShop.css';

const WorkShop = () => {
    return (
        <div className='workshop-container text-light px-5'>
            <h1 className='my-4 workshop-heading'>Workshop</h1>
            <h4>RCC Arranged 4 Major <span className='text-warning'>Workshops</span> in Every Year.</h4>
            <ul>
                <li><h6>Workshops on "Big Data Analytics"</h6></li>
                <li><h6>Two Days Workshop on "Skill Development in C Programming"</h6></li>
                <li><h6>Workshops on Computer Networking</h6></li>
                <li><h6>Introduction to Cloud Computing and Virtualization</h6></li>
            </ul>
        </div>
    );
};

export default WorkShop;