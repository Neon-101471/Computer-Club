import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NoticeDemo from '../NoticeDemo/NoticeDemo';
import NoticeDetails from '../NoticeDetails/NoticeDetails';

const notices = [
    { id: 1, title: 'Notice 01', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 2, title: 'Notice 02', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 3, title: 'Notice 03', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 4, title: 'Notice 04', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 5, title: 'Notice 05', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 6, title: 'Notice 06', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
    { id: 7, title: 'Notice 07', date: { month: 'dec', day: '24' }, fullDate: '24th dec 2021', description: 'Description' },
];

const NoticeBody = () => {
    let { path, url } = useRouteMatch();
    return (
        <Container className='pt-5'>
            <Row className=''>
                <Col xs={12} md={4}>
                    <h3>Notice <span className='color-green'>Board</span></h3>
                    {notices?.map(notice => <Row key={notice?.id} className='top-dotted-border pb-3'>
                        <Col xs={12} md={2} className='bottom-solid-border'>
                            <h3 className='color-green'>24</h3>
                            <h5>DEC</h5>
                        </Col>
                        <Col xs={12} md={10}>
                            <Link to={`${url}/${notice?.title}`}>
                                {notice?.title}
                                <p className='color-green'><i className="fas fa-calendar-alt"></i> {notice?.fullDate}</p>
                            </Link>
                        </Col>
                    </Row>)}
                </Col>

                <Col xs={12} md={8} className='ps-5'>
                    <Switch>
                        <Route exact path={path}>
                            <NoticeDemo />
                        </Route>
                        {notices?.map(notice => <Route key={Math.random()} path={`${path}/${notice.title}`}>
                            <NoticeDetails notice={notice} />
                        </Route>
                        )}
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default NoticeBody;