import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Banner = ({ title }) => {
    return (
        <Container fluid style={{ backgroundColor: '#F5F5F5', boxShadow: '8px 8px 22px #9fa4b3, -8px -8px 22px' }}>
            <Container className='d-flex align-items-center justify-content-end' style={{ minHeight: '150px' }}>
                <Row>
                    <h1 className='d-flex fw-bolder'>{title}</h1>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;