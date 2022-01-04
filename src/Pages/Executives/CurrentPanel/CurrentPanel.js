import React from 'react';
import './CurrentPanel.css';
import { Container, Row } from 'react-bootstrap';

const executives = [
    {
        ex_id: 501,
        name: "Mahir Adnan",
        designation: "General Secretary",
        email: 'mahiradnan@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    },
    {
        ex_id: 502,
        name: "Md. Abir Chowdhury",
        designation: "Vice-President Male",
        email: 'mdabir@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    },
    {
        ex_id: 503,
        name: "Urme Chakma",
        designation: "Vice-President Male",
        email: 'urmechakma@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    },
    {
        ex_id: 504,
        name: "Atikuzzaman Rana",
        designation: "Joint Secretary Mail",
        email: 'atikrana@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    },
    {
        ex_id: 505,
        name: "Pankajini Chakma",
        designation: "Joint Secretary Female",
        email: 'pankajinichakma@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    },
    {
        ex_id: 506,
        name: "Assad Khan Ifat",
        designation: "Welfare Secretary",
        email: 'assadkhan@gmail.com',
        image: 'https://i.ibb.co/HpwBvdY/User.png'
    }
]

const CurrentPanel = () => {
    return (
        <div className='executive-container'>
            <Container fluid style={{ backgroundColor: '#F5F5F5', boxShadow: '8px 8px 22px #9fa4b3, -8px -8px 22px' }}>
                <Container className='d-flex align-items-center justify-content-end' style={{ minHeight: '150px' }}>
                    <Row>
                        <h1 className='d-flex fw-bolder' style={{ fontFamily: 'georgia' }}>Executive Body 2020-2021</h1>
                    </Row>
                </Container>
            </Container>
            <div className='container my-5'>

                {/* Mentor and president area start */}
                <div className='row my-2 d-flex justify-content-between'>
                    <div className='row col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-2'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/YPRcj3N/my-bg-3.png" className='img-fluid' alt="" />
                        </div>
                        <div className='col-6 executive-info ps-3 py-4'>
                            <p>Tanjim Mahmud</p>
                            <p>Assistant Professor, Dept. of CSE</p>
                            <p>Mentor, RMSTU Computer Club</p>
                        </div>
                    </div>
                    <div className='row col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-2'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/xhBjkZf/neon-10.png" className='img-fluid' alt="" />
                        </div>
                        <div className='col-6 executive-info ps-3 py-4'>
                            <p>Saif Uddin Ahmed</p>
                            <p>Student, Dept. of CSE</p>
                            <p>President, RMSTU Computer Club</p>
                        </div>
                    </div>
                </div>
                {/* Mentor and president area ends */}

                {/* rest of the executives */}
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-md-4 mx-lg-4 my-5">
                    {
                        executives.map(executive =>
                            <div className="col px-2" key={executive.ex_id}>
                                <div className="card p-2 border-0 executive-card">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={executive.image} className="card-img-top ms-0 pe-5" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{executive.name}</h5>
                                        <h6>Designation: {executive.designation}</h6>
                                        <p>Email: {executive.email}</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CurrentPanel;