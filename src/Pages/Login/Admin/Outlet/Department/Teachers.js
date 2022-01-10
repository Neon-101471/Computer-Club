import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
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
                            <td>
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