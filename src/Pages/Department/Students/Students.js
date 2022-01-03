import React from 'react';
import './Students.css';

const students = [
    {
        student_id: 201,
        student_name: "Yousha Mahmud Khan",
        student_batch: '1st',
        student_email: 'yousha@gmail.com'
    },
    {
        student_id: 202,
        student_name: "Morshidul Amin Ridwan",
        student_batch: '1st',
        student_email: 'ridwan@gmail.com'
    },
    {
        student_id: 203,
        student_name: "Habibur Rahman Rasel",
        student_batch: '1st',
        student_email: 'rasel@gmail.com'
    },
    {
        student_id: 204,
        student_name: "Yousha Mahmud Khan",
        student_batch: '1st',
        student_email: 'yousha@gmail.com'
    },
    {
        student_id: 205,
        student_name: "Morshidul Amin Ridwan",
        student_batch: '1st',
        student_email: 'ridwan@gmail.com'
    },
    {
        student_id: 206,
        student_name: "Habibur Rahman Rasel",
        student_batch: '1st',
        student_email: 'rasel@gmail.com'
    },
    {
        student_id: 207,
        student_name: "Yousha Mahmud Khan",
        student_batch: '1st',
        student_email: 'yousha@gmail.com'
    },
    {
        student_id: 208,
        student_name: "Morshidul Amin Ridwan",
        student_batch: '1st',
        student_email: 'ridwan@gmail.com'
    },
    {
        student_id: 209,
        student_name: "Habibur Rahman Rasel",
        student_batch: '1st',
        student_email: 'rasel@gmail.com'
    },
    {
        student_id: 210,
        student_name: "Yousha Mahmud Khan",
        student_batch: '1st',
        student_email: 'yousha@gmail.com'
    },
    {
        student_id: 211,
        student_name: "Morshidul Amin Ridwan",
        student_batch: '1st',
        student_email: 'ridwan@gmail.com'
    },
    {
        student_id: 212,
        student_name: "Habibur Rahman Rasel",
        student_batch: '1st',
        student_email: 'rasel@gmail.com'
    },
];

const Students = () => {
    return (
        <div className='students-container m-5'>
                <h3 className='text-center py-3'>Students, CSE Department</h3>
                <div className="row row-cols-1 row-cols-md-4 g-3 pt-2">
                    {
                        students.map(student => <div className="col" key={student.student_id}>
                            <div className="card single-student">
                                <div className="card-body">
                                    <h5 className="card-title">{student.student_name}</h5>
                                    <p>{student.student_batch} Batch</p>
                                    <p className="card-text">Email: {student.student_email}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Students;