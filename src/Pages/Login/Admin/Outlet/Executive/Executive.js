import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Executive = () => {
    const [executives, setExecutives] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/executives')
            .then(res => res.json())
            .then(data => setExecutives(data))
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
            title: `Are you sure to delete executive!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass req in backend for delete
                axios.delete(`http://localhost:5000/executives/${id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            Swal.fire(`executive! Deleted`, '', 'success')
                            const updateExecutives = executives.filter(executive => executive?._id !== id);
                            setExecutives(updateExecutives);
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
                                <div className='d-flex justify-content-evenly pt-3'>
                                    <Button variant='warning' onClick={() => handleEdit(executive._id)}>Edit</Button>
                                    <Button variant='danger' onClick={() => handleDelete(executive._id)}>Delete</Button>
                                </div>
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