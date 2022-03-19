import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ProgrammingContest from './ProgrammingContest/ProgrammingContest';
import WorkShop from './WorkShop/WorkShop';
import Webinars from './Webinars/Webinars';
import Seminar from './Seminar/Seminar';
import BootCamp from './BootCamp/BootCamp';

const sideNav = [
    { id: 1, title: 'Programming Contest', tab: 'programming-contest' },
    { id: 2, title: 'WorkShop', tab: 'workshop' },
    { id: 3, title: 'Webinar', tab: 'webinars' },
    { id: 4, title: 'Seminar', tab: 'seminar' },
    { id: 5, title: 'Bootcamp', tab: 'boot-camp' },
]

const Events = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container className='py-5'>
            <Row className=''>
                <Col xs={12} md={2}>
                    <h3>Our <span className='color-green'>Events</span></h3>
                    {sideNav?.map(sideMenu => <Row key={sideMenu?.id} className='top-dotted-border py-2'>
                        <Col xs={12}>
                            <Link to={`${url}/${sideMenu?.tab}`}>
                                {sideMenu?.title}
                            </Link>
                        </Col>
                    </Row>)}
                </Col>
                <Col xs={12} md={10} className='ps-5'>
                    <Switch>
                        <Route exact path={path}>
                            <ProgrammingContest />
                        </Route>
                        <Route path={`${path}/programming-contest`}>
                            <ProgrammingContest />
                        </Route>
                        <Route path={`${path}/workshop`}>
                            <WorkShop />
                        </Route>
                        <Route path={`${path}/webinars`}>
                            <Webinars />
                        </Route>
                        <Route path={`${path}/seminar`}>
                            <Seminar />
                        </Route>
                        <Route path={`${path}/boot-camp`}>
                            <BootCamp />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Events;