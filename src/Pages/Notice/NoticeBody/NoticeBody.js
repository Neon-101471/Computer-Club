import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NoticeDemo from '../NoticeDemo/NoticeDemo';
import NoticeDetails from '../NoticeDetails/NoticeDetails';

const NoticeBody = () => {
    let { path, url } = useRouteMatch();
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-notice')
            .then(res => res.json())
            .then(data => setNotices(data))
    }, [])

    return (
        <Container className='pt-5'>
            <Row className='my-5'>
                <Col xs={12} md={4}>
                    <h3>Notice <span className='color-green'>Board</span></h3>
                    {notices?.map(notice => <Row key={notice?._id} className='top-dotted-border pb-3'>
                        <Col xs={12} md={2} className='bottom-solid-border'>
                            <h3 className='color-green'>{notice?.day}</h3>
                            <h5>{notice?.chrMonth}</h5>
                        </Col>
                        <Col xs={12} md={10}>
                            <Link to={`${url}/${notice?.name}`}>
                                {notice?.name}
                                <p className='color-green'><i className="fas fa-calendar-alt"></i> {notice?.publishing_date}</p>
                            </Link>
                        </Col>
                    </Row>)}
                </Col>

                <Col xs={12} md={8} className='ps-5'>
                    <Switch>
                        <Route exact path={path}>
                            <NoticeDemo />
                        </Route>
                        {notices?.map(notice => <Route key={Math.random()} path={`${path}/${notice.name}`}>
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