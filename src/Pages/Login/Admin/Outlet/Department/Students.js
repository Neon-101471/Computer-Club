import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://fast-fortress-28219.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setStudents(data))
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
            title: `Are you sure to delete Student!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass req in backend for delete
                axios.delete(`https://fast-fortress-28219.herokuapp.com/students/${id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            Swal.fire(`Student! Deleted`, '', 'success')
                            const updateStudents = students.filter(student => student?._id !== id);
                            setStudents(updateStudents);
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
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='warning' onClick={() => handleEdit(student._id)}>Edit</Button>
                                <Button variant='danger' onClick={() => handleDelete(student._id)}>Delete</Button>
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