import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Executive = () => {
    const [executives, setExecutives] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/executives')
            .then(res => res.json())
            .then(data => setExecutives(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='fw-bolder text-center pb-3'>Our Executives Body</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Panel</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        executives?.map(executive => <tr key={executive?._id}>
                            <td><img src={executive?.photoURL} width='80px' alt="" /></td>
                            <td>{executive?.name} <br /> {executive?.title} </td>
                            <td>{executive?.designation}</td>
                            <td>{executive?.panel}</td>
                            <td><a href={`${executive?.email}`}>{executive?.email}</a></td>
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

export default Executive;