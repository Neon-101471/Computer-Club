import React from 'react';
import './WhyJoinUs.css';

const WhyJoinUs = () => {
    return (
        <div className='py-2 my-3' style={{backgroundColor: '#f5f5f5'}}>
            <div className='container my-4'>
            <h3 className='text-center pb-2 text-success'>Why Join Our Computer Club</h3>
            <div className='row d-flex align-items-center mb-2 justify-content-between'>
                <img className='col-md-3 img-fluid' src="https://i.ibb.co/1LZRLKN/skills-development.jpg" alt="" />
                <p className='col-md-9 d-flex align-items-center'>To build skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Development, Volunteering, UI/UX Design, and Graphic Design. To connect with a community of senior, junior, alumni, and respected teachers. Build harmony and get ideas about the demanding skills of the current and future professional domain.</p>
            </div>
            <div className='row d-flex align-items-center mb-2'>
                <p className='col-md-9 d-flex justify-content-between'>To build skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Development, Volunteering, UI/UX Design, and Graphic Design. To connect with a community of senior, junior, alumni, and respected teachers. Build harmony and get ideas about the demanding skills of the current and future professional domain.</p>
                <img className='col-md-3 img-fluid' src="https://i.ibb.co/svPffFg/data-Science-domain-01.png" alt="" />
            </div>
            <div className='row d-flex align-items-center mb-2'>
                <img className='col-md-3 img-fluid' src="https://i.ibb.co/VgFmCcY/Skill-dev.png" alt="" />
                <p className='col-md-9 d-flex justify-content-between'>To build skills in various sectors including Content Writing, Photojournalism, Video Editing, Event Organizing, Development, Volunteering, UI/UX Design, and Graphic Design. To connect with a community of senior, junior, alumni, and respected teachers. Build harmony and get ideas about the demanding skills of the current and future professional domain.</p>
            </div>
        </div>
        </div>
    );
};

export default WhyJoinUs;