import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const sideNav = [{ id: 1, title: 'Programming Contest' }, { id: 2, title: 'WorkShop' }, { id: 3, title: 'Webinars' }, { id: 4, title: 'Seminar' }, { id: 5, title: 'Boot camp Link' }]

const Events = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container className='py-5'>
            <Row className=''>
                <Col xs={12} md={2}>
                    <h3>Our <span className='color-green'>Events</span></h3>

                    {sideNav?.map(sideMenu => <Row key={sideMenu?.id} className='top-dotted-border py-2'>
                        <Col xs={12}>
                            <Link to={`${url}/${sideMenu?.title}`}>
                                {sideMenu?.title}
                            </Link>
                        </Col>
                    </Row>)}

                </Col>
                <Col xs={12} md={10} className='ps-5'>
                    <Switch>
                        <Route exact path={path}>
                            <h2>Event Details</h2>
                        </Route>
                        {sideNav?.map(notice => <Route key={Math.random()} path={`${path}/${notice.title}`}>

                        </Route>
                        )}
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default Events;