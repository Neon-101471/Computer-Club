import React from 'react';
import './ProgrammingContest.css';

const ProgrammingContest = () => {
    return (
        <div className='programming_contest_container text-light px-5'>
            <h1 className='my-4 programming-contest-heading'>Programming Contest</h1>
            <h4>RCC arrange 3 major <span className='text-warning'>Programming Contest</span> in every year.</h4>
            <ul>
                <li><h6>International Mother Language Day Programming Contest</h6></li>
                <li><h6>RMSTU CSE Day Programming Contest</h6></li>
                <li><h6>Victory Day Programming Contest</h6></li>
            </ul>
        </div>
    );
};

export default ProgrammingContest;