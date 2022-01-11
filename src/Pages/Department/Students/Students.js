import React from 'react';
import './Students.css';
import Banner from '../../Notice/Banner/Banner';

const students = [
    {
        student_id: 201,
        name: "Yousha Mahmud Khan",
        batch: '1st',
        session: '2021-2022',
        email: 'yousha@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 202,
        name: "Morshidul Amin Ridwan",
        batch: '1st',
        session: '2021-2022',
        email: 'ridwan@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 203,
        name: "Habibur Rahman Rasel",
        batch: '1st',
        session: '2021-2022',
        email: 'rasel@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 204,
        name: "Yousha Mahmud Khan",
        batch: '1st',
        session: '2021-2022',
        email: 'yousha@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 205,
        name: "Morshidul Amin Ridwan",
        batch: '1st',
        session: '2021-2022',
        email: 'ridwan@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 206,
        name: "Habibur Rahman Rasel",
        batch: '1st',
        session: '2021-2022',
        email: 'rasel@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 207,
        name: "Yousha Mahmud Khan",
        batch: '1st',
        session: '2021-2022',
        email: 'yousha@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 208,
        name: "Morshidul Amin Ridwan",
        batch: '1st',
        session: '2021-2022',
        email: 'ridwan@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 209,
        name: "Habibur Rahman Rasel",
        batch: '1st',
        session: '2021-2022',
        email: 'rasel@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 210,
        name: "Morshidul Amin Ridwan",
        batch: '1st',
        session: '2021-2022',
        email: 'ridwan@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 211,
        name: "Habibur Rahman Rasel",
        batch: '1st',
        session: '2021-2022',
        email: 'rasel@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
    {
        student_id: 212,
        name: "Habibur Rahman Rasel",
        batch: '1st',
        session: '2021-2022',
        email: 'rasel@gmail.com',
        photoURL: 'https://cdn.codechef.com/download/banner/1641806910.png'
    },
];

const Students = () => {
    return (
        <div>
            <Banner title={"Students, CSE Department"} />
            <div className='students-container m-5'>
                <div className="row row-cols-1 row-cols-md-4 g-3 pt-2">
                    {
                        students.map(student => <div className="col" key={student.student_id}>
                            <div className="card single-student">
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