import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://fast-fortress-28219.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    // handle edit 
    const handleEdit = id => {
        Swal.fire(
            'The Edit not work now?',
            `You can delete this rather edit than add again?`,
            'question'
        )
    }
    //handle delete 
    const handleDelete = id => {
        Swal.fire({
            title: `Are you sure to delete event!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass req in backend for delete
                axios.delete(`https://fast-fortress-28219.herokuapp.com/event/${id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            Swal.fire(`Event! Deleted`, '', 'success')
                            const updateEvent = events.filter(event => event?._id !== id);
                            setEvents(updateEvent);
                        } else {
                            Swal.fire(`${result?.data?.message}`, '', 'info')
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
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

                <tbody>

                    {
                        events?.map(event => <tr key={event?._id}>
                            <td>{event?.eventType}</td>
                            <td>{event?.name}</td>
                            <td>{event?.starts_at} <br /> {event?.starts_on}</td>
                            <td>{event?.problem_number} <br /> Duration: {event?.contest_duration}</td>
                            <td><a href={`${event?.name}`}>{event?.details.split(0, 150)}...</a></td>
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='warning' onClick={() => handleEdit(event._id)}>Edit</Button>
                                <Button variant='danger' onClick={() => handleDelete(event._id)}>Delete</Button>
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