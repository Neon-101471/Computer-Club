import React from 'react';
import './Dashboard.css';
import { Col, Container, Row } from 'react-bootstrap';
import AdminSideNav from '../AdminSideNav/AdminSideNav';
import Outlet from '../Outlet/Outlet';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={2} style={{ backgroundColor: 'rgb(12, 35, 64)' }}>
                    <AdminSideNav />
                </Col>
                <Col xs={12} md={10} style={{padding: '0px'}}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;