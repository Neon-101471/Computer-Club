import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const Results = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetch('https://computer-club-team.herokuapp.com/results')
            .then(res => res.json())
            .then(data => setResults(data))
    }, [])
    return (
        <div className='py-5'>
            <h2 className='fw-bolder text-center pb-3'>Results List</h2>
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
                        results?.map(notice => <tr key={notice?._id}>
                            <td>{notice?.publishing_date}</td>
                            <td>{notice?.name}</td>
                            <td>{notice?.description}</td>
                            <td><a href={`${notice?.pdfFile}`} target='_blank' rel="noreferrer">File Link</a></td>
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

export default Results;