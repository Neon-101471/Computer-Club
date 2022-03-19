import React from 'react';
import './Seminar.css';

const Seminar = () => {
    return (
        <div className='seminar_container text-light px-5'>
            <h1 className='my-4 seminar-heading'>Seminar</h1>
            <h4>RMSTU Computer Club- RCC Arranged <span className='text-warning'>Seminar</span> on Below Topics.</h4>
            <ul>
                <li><h6>Quantum Computing</h6></li>
                <li><h6>Blockchain Technology</h6></li>
                <li><h6>Internet of Things (IoT)</h6></li>
                <li><h6>Data Mining & Machine Learning</h6></li>
            </ul>
        </div>
    );
};

export default Seminar;