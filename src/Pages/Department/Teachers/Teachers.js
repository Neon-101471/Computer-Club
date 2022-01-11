import React from 'react';
import './Teachers.css';
import Banner from '../../Notice/Banner/Banner';

const teachers = [
    {
        teacher_id: 101,
        name: 'Dhiman Sarma',
        designation: 'Department Chairman',
        email: 'dhiman.sarma@rmstu.edu.bd',
        image: 'https://i.ibb.co/YjxzGGf/Dhiman-Sir-160x160.jpg',
    },
    {
        teacher_id: 102,
        name: 'Juel Sikder',
        designation: 'Assistant Professor',
        email: 'juelsikder@rmstu.edu.bd',
        image: 'https://i.ibb.co/CtYgHgc/Juel-Sikder-CSE-160x160.jpg',
    },
    {
        teacher_id: 103,
        name: 'Sajib Tripura',
        designation: 'Assistant Professor',
        email: 'sajibtripura@rmstu.edu.bd',
        image: 'https://i.ibb.co/BcxwK10/Passport-160x160.png',
    },
    {
        teacher_id: 104,
        name: 'Sayed Asaduzzaman',
        designation: 'Assistant Professor',
        email: 's.asaduzzaman@rmstu.edu.bd',
        image: 'https://i.ibb.co/G5GtYTp/Asaduzzaman-CSE-Pic-copy.jpg',
    },
    {
        teacher_id: 105,
        name: 'Tanjim Mahmud',
        designation: 'Assistant Professor',
        email: 'tanjim.cse@rmstu.edu.bd',
        image: 'https://i.ibb.co/wR1SHSL/Tanjim-160x160.jpg',
    },
    {
        teacher_id: 106,
        name: 'Mithun Dutta',
        designation: 'Lecturer',
        email: 'mithundutta@rmstu.edu.bd',
        image: 'https://i.ibb.co/b1Vn1p6/Mithun-dutta.jpg',
    },
    {
        teacher_id: 107,
        name: 'Ahmed Imtiaz',
        designation: 'Lecturer',
        email: 'ahmedimtiaz@rmstu.edu.bd',
        image: 'https://i.ibb.co/gwQQtpx/Imtiaz-sir-1.jpg',
    },
    {
        teacher_id: 108,
        name: 'Dhonita Tripura',
        designation: 'Lecturer',
        email: 'dhonitatripura@rmstu.edu.bd',
        image: 'https://i.ibb.co/x5W34Wh/Dhonita-1.jpg',
    },
    {
        teacher_id: 109,
        name: 'G. M. Sakhawat Hossain',
        designation: 'Lecturer',
        email: 'gmsakhawat@rmstu.edu.bd',
        image: 'https://i.ibb.co/2snMDTh/Shakahwat-copy-2.jpg',
    },
    {
        teacher_id: 110,
        name: 'Md. Mynoddin',
        designation: 'Lecturer',
        email: 'mynoddin@rmstu.edu.bd',
        image: 'https://i.ibb.co/8YYJwc8/Mynuddin-copy-1.jpg',
    },
    {
        teacher_id: 111,
        name: 'Rishita Chakma',
        designation: 'Lecturer',
        email: 'rishita@rmstu.edu.bd',
        image: 'https://i.ibb.co/7Rbhpxv/Rishita-Chakma-CSE-Pic-copy.jpg',
    },
    {
        teacher_id: 112,
        name: 'Mahibul Abdullah Ibne Momin',
        designation: 'Lecturer',
        email: 'tushar1304017@gmail.com',
        image: 'https://i.ibb.co/JjNSRX0/Mohibul-copy-1.jpg',
    }
];

const Teachers = () => {
    return (
        <div className='teachers-container pb-5'>
            <Banner title={'Teachers, CSE Department'}></Banner>
            <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-3 mx-md-4 mx-lg-4 mt-5">
                    {
                        teachers.map(teacher => <div className="col" key={teacher.teacher_id}>
                            <div className="card single-teacher">
                                <div className="teacher-image d-flex justify-content-center align-items-center">
                                    <img src={teacher.image} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{teacher.name}</h5>
                                    <h6>{teacher.designation}, Department of CSE</h6>
                                    <p>Email: {teacher.email}</p>
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