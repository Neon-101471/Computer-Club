import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://fast-fortress-28219.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // handle edit 
    const handleAdmin = id => {
        Swal.fire(
            'The Edit not work now?',
            `You can't make admin here now, visit make admin page to make admin?`,
            'question'
        )
    }
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
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='warning' onClick={() => handleAdmin(user._id)}>Make Admin</Button>
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