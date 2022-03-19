import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactInfo = () => {
    return (
        <Container className='my-5'>
            <h2 className="pb-3">
                Our Address <hr />
            </h2>
            <Row>
                <Col className='pe-md-5' xs={12} md={6}>
                    <iframe title='direction-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.333717829794!2d92.18184001427505!3d22.641342936151304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752b4f7b7160e0b%3A0x3b67ac3883bcc02d!2sRangamati%20Science%20%26%20Technology%20University%20(Temporary%20Academic%20Area)!5e0!3m2!1sen!2sbd!4v1642053528493!5m2!1sen!2sbd" width="100%" height="350" style={{ border: '0', boxShadow: '0px 0px 8px 2px rgb(0 0 0 / 50%)', borderRadius: '5px' }} allowFullScreen="" loading="lazy"></iframe>
                </Col>
                <Col xs={12} md={6}>
                    <h2 className='mt-2'>Get In Touch</h2>
                    <address>
                        <h4 className='pt-3'>Location</h4>
                        <p>Rangamati Science & Technology University (RMSTU), <br /> Jhagra Bil, Rangamati-4500</p>
                        <h4 className='pt-3'>Contact</h4>
                        <p className='m-0'>Email: <a href="rmstu.club@gmail.com">rmstu.club@gmail.com</a></p>
                        <p className='m-0'>Phone: <a href="tel: +8801555882244">+8801555882244</a></p>
                    </address>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactInfo;