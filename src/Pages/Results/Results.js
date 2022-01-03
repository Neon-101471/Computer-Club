import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../Notice/Banner/Banner';

import resultImg from '../../Images/result.png';

const Results = () => {
    return (
        <div>
            <Banner title={'Results'} />
            <Container className='my-5'>
                <h2 className='my-3 fw-bolder fs-1'>Leader Board</h2>
                <Row>
                    <Col xs={12} className='d-flex justify-content-center'>
                        <img className='img-fluid' src={resultImg} alt="result sheet" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Results;