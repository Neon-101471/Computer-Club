import React from 'react';
import './Executive2021.css';
import Banner from '../../Notice/Banner/Banner';

const executives = [
    {
        ex_id: 501,
        name: "Mahir Adnan",
        designation: "General Secretary",
        email: 'mahiradnan@gmail.com',
        image: 'https://i.ibb.co/3RXyzsj/bg-1.png'
    },
    {
        ex_id: 502,
        name: "Md. Abir Chowdhury",
        designation: "Vice-President Male",
        email: 'mdabir@gmail.com',
        image: 'https://i.ibb.co/nCfFd3c/executive-abir.png'
    },
    {
        ex_id: 503,
        name: "Urme Chakma",
        designation: "Vice-President Female",
        email: 'urmechakma@gmail.com',
        image: 'https://i.ibb.co/vs21BNR/executive-urme.png'
    },
    {
        ex_id: 504,
        name: "Atikuzzaman Rana",
        designation: "Joint Secretary Male",
        email: 'atikrana@gmail.com',
        image: 'https://i.ibb.co/P1HFbg5/executive-rana.png'
    },
    {
        ex_id: 505,
        name: "Pankajini Chakma",
        designation: "Joint Secretary Female",
        email: 'pankajinichakma@gmail.com',
        image: 'https://i.ibb.co/2FWwXDq/executive-pankajini.png'
    },
    {
        ex_id: 506,
        name: "MD Jakir Hasan",
        designation: "Organizing Secretary",
        email: 'jakirhasan@gmail.com',
        image: 'https://i.ibb.co/khdRfNX/executive-jakir.png'
    },
    {
        ex_id: 507,
        name: "Mohammad Abu Kowcher",
        designation: "Finance Secretary",
        email: 'abukowcher@gmail.com',
        image: 'https://i.ibb.co/c3bW3b0/executive-kowcher.png'
    },
    {
        ex_id: 508,
        name: "Assad Khan Ifat",
        designation: "Publicity & Publication Secretary",
        email: 'assadkhan@gmail.com',
        image: 'https://i.ibb.co/DL5DLTd/executive-ifat.png'
    },
    {
        ex_id: 509,
        name: "Hasu Dewan",
        designation: "Welfare Secretary",
        email: 'hasudewan@gmail.com',
        image: 'https://i.ibb.co/Yp83tBh/executive-hasu.png'
    },
    {
        ex_id: 510,
        name: "Saika Ahmed",
        designation: "Batch Executive (2nd)",
        email: 'saikaahmed@gmail.com',
        image: 'https://i.ibb.co/z5ZpYnx/executive-saika.png'
    },
    {
        ex_id: 511,
        name: "Mohiuddin Munna",
        designation: "Batch Executive (3rd)",
        email: 'mohiuddinmunna@gmail.com',
        image: 'https://i.ibb.co/rdGNYRm/executive-munna.png'
    },
    {
        ex_id: 512,
        name: "Najmul Hasan Shanto",
        designation: "Batch Executive (4th)",
        email: 'najmulshanto@gmail.com',
        image: 'https://i.ibb.co/ZT2Tcx9/executive-shanto.png'
    },
    {
        ex_id: 513,
        name: "Wasi Ur Rahman",
        designation: "Batch Executive (5th)",
        email: 'assadkhan@gmail.com',
        image: 'https://i.ibb.co/PhHQyVR/executive-wasi.png'
    },
    {
        ex_id: 514,
        name: "Noor Sayed Faysal",
        designation: "Batch Executive (6th)",
        email: 'noorfaysal@gmail.com',
        image: 'https://i.ibb.co/9TH93FK/executive-noor.png'
    },
]

const Executive2021 = () => {
    return (
        <div className='executive-container'>
            <Banner title={'Executive Body 2020-2021'}></Banner>

            <div className='container my-5'>
                {/* Mentor and president area start */}
                <div className='row my-2 d-flex justify-content-between'>
                    <div className='row col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-2 border'>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/YPRcj3N/my-bg-3.png" className='img-fluid' alt="" />
                        </div>
                        <div className='col-6 executive-info ps-2 py-4'>
                            <p>Tanjim Mahmud</p>
                            <p>Assistant Professor, Dept. of CSE</p>
                            <p>Mentor, RMSTU Computer Club</p>
                            <p>Email: tanjim.cse@rmstu.edu.bd</p>
                        </div>
                    </div>
                    <div className='row col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-2 border'>
                        <div className='col-6 executive-info ps-2 py-4'>
                            <p>Saif Uddin Ahmed</p>
                            <p>Student, Dept. of CSE</p>
                            <p>President, RMSTU Computer Club</p>
                            <p>Email: ahmed1414.saif@gmail.com</p>
                        </div>
                        <div className='col-6'>
                            <img src="https://i.ibb.co/Tr0bQXK/bg-2.png" className='img-fluid' alt="" />
                            {/* <img src="https://github.com/Neon-101471/web-portfolio/blob/main/images/neon-10.png?raw=true" className='img-fluid' alt="" /> */}
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

export default Executive2021;