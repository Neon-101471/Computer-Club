import React, { useEffect, useState } from 'react';
import './Students.css';
import Banner from '../../Notice/Banner/Banner';
import { Button, Col, Row } from 'react-bootstrap';

const Students = () => {
    const [students, setStudents] = useState([])
    const [uiData, setUiData] = useState([]);
    useEffect(() => {
        fetch('https://computer-club-team.herokuapp.com/students')
            .then(res => res.json())
            .then(data => {
                setStudents(data)
                setUiData(data)
            });
    }, [])
    var uniqueBatch = [];
    students.filter(function (item) {
        var i = uniqueBatch.findIndex(x => x.batch === item.batch);
        if (i <= -1) {
            uniqueBatch.push(item);
        }
        return null;
    });
    const filterData = key => {
        const data = students.filter(student => student.batch === key);
        setUiData(data);
    }

    return (
        <div>
            <Banner title={"Students, CSE Department"} />
            <div className='students-container m-5'>
                <Row>
                    <Col xs={12} md={10}>
                        <div className="row row-cols-1 row-cols-md-4 g-3 pt-2">
                            {
                                uiData.map(student => <div className="col" key={student._id}>
                                    <div className="card single-student">
                                        <div className='d-flex justify-content-center py-3'>
                                            <img src={student.photoURL} style={{ width: '80px', height: '80px', borderRadius: '50%' }} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{student.name}</h5>
                                            <p>{student.batch} Batch</p>
                                            <p>{student.session} Session</p>
                                            <p className="card-text">Email: {student.email}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <h2>Jump Batch</h2>
                        {uniqueBatch.map(batch =>
                            <Button className='w-100' variant='light' onClick={() => filterData(batch.batch)}>{batch.batch}</Button>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Students;