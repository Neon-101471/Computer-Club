import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('https://computer-club-team.herokuapp.com/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
        setLoading(false);
    }, [])
    if (loading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <div className='py-5'>
            <h2 className='fw-bolder text-center pb-3'>All Teachers</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teachers?.map(teacher => <tr key={teacher?._id}>
                            <td><img src={teacher?.image} width='80px' alt="" /></td>
                            <td>{teacher?.name}</td>
                            <td>{teacher?.designation}</td>
                            <td><a href={`${teacher?.email}`}>{teacher?.email}</a></td>
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

export default Teachers;