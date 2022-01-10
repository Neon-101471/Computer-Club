import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='text-left footer-container pt-4'>
            <div className="container-fluid row">

                {/* special container */}
                <div className="col-md-3 special-container ps-md-2 ps-md-2">
                    <div className=''>
                        <img className='img-fluid my-2' src="https://i.ibb.co/R477c2j/Club-logo.jpg" alt="" />
                    </div>
                    <p>Feedback & Complaints</p>
                    <p>Upcoming Events</p>
                    <p>Make an Appointment</p>
                </div>

                {/* contact-container */}
                <div className="col-md-3 contact-container">
                    <h2 className='text-left'>Contact Us</h2>
                    <p>Address: Rangamati-4500</p>
                    <p>Phone: (08) 1710 012012</p>
                    <p>Fax: (08) 0452 854535</p>
                    <p>Mail: club@gmail.com</p>
                    <p>Open: 8:00-19:00, Sun-Thu</p>
                </div>

                {/* information container */}
                <div className="col-md-2 information-container">
                    <h2>Information</h2>
                    <p>Address: Rangamati-4500</p>
                    <p>Phone: (08) 1710 012012</p>
                    <p>Fax: (08) 0452 854535</p>
                    <p>Mail: club@gmail.com</p>
                    <p>Open: 8:00-19:00, Sun-Thu</p>
                </div>

                {/* academic container */}
                <div className="col-md-2 academic-container">
                    <h2>Academic</h2>
                    <p>Address: Rangamati-4500</p>
                    <p>Phone: (08) 1710 012012</p>
                    <p>Fax: (08) 0452 854535</p>
                    <p>Mail: club@gmail.com</p>
                    <p>Open: 8:00-19:00, Sun-Thu</p>
                </div>

                {/* research-container */}
                <div className="col-md-2 research-container">
                    <h2>Research</h2>
                    <p>Address: Rangamati-4500</p>
                    <p>Phone: (08) 1710 012012</p>
                    <p>Fax: (08) 0452 854535</p>
                    <p>Mail: club@gmail.com</p>
                    <p>Open: 8:00-19:00, Sun-Thu</p>
                </div>
            </div>
            <div className='copyright-area'>
                <hr />
                <p className='text-center' style={{ fontSize: '12px' }}>&copy; All rights reserved | <a href="https://rmstu.edu.bd/">RMSTU</a> Computer Club-2022</p>
            </div>
        </div>
    );
};

export default Footer;