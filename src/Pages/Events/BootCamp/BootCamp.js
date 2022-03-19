import React from 'react';
import './BootCamp.css';

const BootCamp = () => {
    return (
        <div className='bootcamp_container text-light px-5'>
            <h1 className='my-4 bootcamp_heading'>Bootcamp</h1>
            <h4>RMSTU Computer Club Arranged <span className='text-warning'>Bootcamp</span> Under the Topics.</h4>
            <ul>
                <li><h6>Web Development</h6></li>
                <li><h6>Data Science</h6></li>
                <li><h6>Cyber Security</h6></li>
                <li><h6>Language-specific Bootcamps (Python, Java, Ruby etc.)</h6></li>
            </ul>
        </div>
    );
};

export default BootCamp;