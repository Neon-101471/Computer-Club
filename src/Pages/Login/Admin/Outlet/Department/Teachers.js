import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/teachers')
            .then(res => res.json())
            .then(data => setTeachers(data))
        setLoading(false);
    }, [])
    if (loading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
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
            title: `Are you sure to delete teacher!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass req in backend for delete
                axios.delete(`http://localhost:5000/teachers/${id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            Swal.fire(`teacher! Deleted`, '', 'success')
                            const updateTeachers = teachers.filter(teacher => teacher?._id !== id);
                            setTeachers(updateTeachers);
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
                            <td className='d-flex justify-content-evenly align-items-center'>
                                <Button variant='warning' onClick={() => handleEdit(teacher._id)}>Edit</Button>
                                <Button variant='danger' onClick={() => handleDelete(teacher._id)}>Delete</Button>
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