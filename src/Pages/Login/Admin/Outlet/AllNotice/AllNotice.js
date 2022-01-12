import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AllNotice = () => {
    const [notices, setNotices] = useState([]);
    useEffect(() => {
        fetch('https://computer-club-team.herokuapp.com/all-notice')
            .then(res => res.json())
            .then(data => setNotices(data))
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
            title: `Are you sure to delete Notice!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass req in backend for delete
                axios.delete(`https://computer-club-team.herokuapp.com/notices/${id}`)
                    .then(result => {
                        if (result?.data?.deletedCount > 0) {
                            Swal.fire(`Notice! Deleted`, '', 'success')
                            const updateNotices = notices.filter(event => event?._id !== id);
                            setNotices(updateNotices);
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
            <h2 className='fw-bolder text-center pb-3'>All Notices</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>File</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notices?.map(notice => <tr key={notice?._id}>
                            <td>{notice?.publishing_date}</td>
                            <td>{notice?.name}</td>
                            <td className='w-50'>{notice?.description.split(0, 100)} ...</td>
                            <td><a href={`${notice?.pdfFile}`} target='_blank' rel="noreferrer">File Link</a></td>
                            <td className='d-flex justify-content-evenly'>
                                <Button variant='warning' onClick={() => handleEdit(notice._id)}>Edit</Button>
                                <Button variant='danger' onClick={() => handleDelete(notice._id)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllNotice;