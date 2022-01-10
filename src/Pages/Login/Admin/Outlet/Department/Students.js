import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/students')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='fw-bolder text-center pb-3'>All Students</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Session</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map(student => <tr key={student?._id}>
                            <td><img src={student?.photoURL} width='80px' alt="" /></td>
                            <td>{student?.name} <br />{student?.batch}</td>
                            <td>{student?.session}</td>
                            <td><a href={`${student?.email}`}>{student?.email}</a></td>
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

export default Students;