import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllEvents = () => {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .finally(setLoading(false))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='fw-bolder text-center pb-3'>All Events</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Start</th>
                        <th>Problem</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {loading && <h2>Loading plase wait</h2>}
                <tbody>
                    {
                        events?.map(event => <tr key={event?._id}>
                            <td>{event?.eventType}</td>
                            <td>{event?.name}</td>
                            <td>{event?.starts_at} <br /> {event?.starts_on}</td>
                            <td>{event?.problem_number} <br /> Duration: {event?.contest_duration}</td>
                            <td><a href={`${event?.name}`}>{event?.details.split(0, 150)}...</a></td>
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='warning'>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllEvents;