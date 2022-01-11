import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://computer-club-team.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className='py-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <tr key={user?._id}>
                            <td>#</td>
                            <td>{user?.displayName}</td>
                            <td>{user?.email}</td>
                            <td>{user.role ? user.role : 'General'}</td>
                            <td className='d-flex justify-content-center'>
                                <Button variant='warning'>Make Admin</Button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Users;