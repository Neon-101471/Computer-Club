import React, { useEffect, useState } from 'react';
import './Students.css';
import Banner from '../../Notice/Banner/Banner';

const Students = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('https://computer-club-team.herokuapp.com/students')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, [])

    return (
        <div>
            <Banner title={"Students, CSE Department"} />
            <div className='students-container m-5'>
                <div className="row row-cols-1 row-cols-md-4 g-3 pt-2">
                    {
                        students.map(student => <div className="col" key={student.student_id}>
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
            </div>
        </div>
    );
};

export default Students;