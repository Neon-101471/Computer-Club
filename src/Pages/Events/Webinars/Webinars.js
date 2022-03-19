import React from 'react';
import './Webinars.css';

const Webinars = () => {
    return (
        <div className='webinar_container text-light px-5'>
            <h1 className='my-4 webinar-heading'>Webinars</h1>
            <h4>Every Year RCC Arranged 4 <span className='text-warning'>Webinars</span> on Different Topics.</h4>
            <ul>
                <li><h6>Webinar on Career Opportunities in Data Science</h6></li>
                <li><h6>Webinar on Research Paper Writing and Editing</h6></li>
                <li><h6>Webinar on Career Opportunities in Competitive Programming</h6></li>
                <li><h6>Webinar on Career Opportunities in Data Mining & Machine Learning</h6></li>
            </ul>
        </div>
    );
};

export default Webinars;