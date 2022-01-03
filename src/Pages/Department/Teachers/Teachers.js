import React from 'react';
import './Teachers.css';

const teachers = [
    {
        teacher_id: 101,
        name: 'Dhiman Sarma',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 102,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 103,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 104,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 105,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 106,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 107,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 108,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
    {
        teacher_id: 109,
        name: 'Mithun Dutta',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
        details: 'This is a longer card with supporting text below as a natural lead-in to additional content.'
    },
];

const Teachers = () => {
    return (
        <div className='teachers-container py-5'>
            <div className='container'>
                <h3 className='text-center mb-4'>Teachers, CSE Department</h3>
                <div className="row row-cols-1 row-cols-md-3 g-3 mx-md-4 mx-lg-4">
                    {
                        teachers.map(teacher => <div className="col" key={teacher.teacher_id}>
                            <div className="card single-teacher">
                                <div className="teacher-image d-flex justify-content-center align-items-center">
                                    <img src={teacher.image} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{teacher.name}</h5>
                                    <h6>Designation: Assistant Professor</h6>
                                    <p className="card-text">{teacher.details}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teachers;