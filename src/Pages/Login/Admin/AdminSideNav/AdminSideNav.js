import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../../Hooks/useAuth';

const AdminSideNav = () => {
    const { admin } = useAuth();
    let { url } = useRouteMatch();
    return (
        <div className='my-5'>

            {
                admin && <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='bg-navy'>Events</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/all-programming-contest`}>All Programming Contest</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-programming-contest`}>Add Programming Contest</Link>

                            <Link className='bg-navy d-block' to={`${url}/all-workShop`}>WorkShop</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-workShop`}>Add WorkShop</Link>

                            <Link className='bg-navy d-block' to={`${url}/all-webinars`}>All Webinars</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-webinars`}>Add Webinars</Link>

                            <Link className='bg-navy d-block' to={`${url}/all-seminar`}>All Seminar</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-seminar`}>Add seminar</Link>

                            <Link className='bg-navy d-block' to={`${url}/all-boot-camp-link`}>All Boot camp Link</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-boot-camp-link`}>Add Boot camp Link</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className='bg-navy'>Notice</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/all-notice`}>All Notice</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-notice`}>Add new Notice</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className='bg-navy'>Department</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/teachers`}>Teachers</Link>
                            <Link className='bg-navy d-block' to={`${url}/students`}>Students</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className='bg-navy'>Executive</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/all-executive`}>All Executive</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-executive`}>Add Executive</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className='bg-navy'>Users</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/users`}>Users</Link>
                            <Link className='bg-navy d-block' to={`${url}/make-admin`}>Make Admin</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header className='bg-navy'>Results</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/results`}>Results</Link>
                            <Link className='bg-navy d-block' to={`${url}/add-new-results`}>Add Result</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }
            {/* general user left nav bar */}
            {!admin &&
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className='bg-navy'>Coming Soon</Accordion.Header>
                        <Accordion.Body className='bg-navy'>
                            <Link className='bg-navy d-block' to={`${url}/coming`}>******</Link>
                            <Link className='bg-navy d-block' to={`${url}/profile`}>+++++</Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

        </div>
    );
};

export default AdminSideNav;