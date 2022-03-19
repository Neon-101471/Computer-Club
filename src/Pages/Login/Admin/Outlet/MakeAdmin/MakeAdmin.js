import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        //alert set
        Swal.fire({
            title: `Are you sure to make admin ${data.email}!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass data in backend
                axios.post('https://fast-fortress-28219.herokuapp.com/users/make-admin', data)
                    .then(result => {
                        console.log(result);
                        if (result?.data?.modifiedCount > 0) {
                            Swal.fire('Make Admin!', '', 'success')
                            reset();
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
        <Container className='mt-5 pt-5'>
            <Row className='d-flex justify-content-center'>
                <Col xs={12} md={4} className='shadow p-4 rounded'>
                    <h2 className='fw-bolder'>Make New Admin</h2>
                    <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type='email' className="form-control" {...register("email", { required: true })} placeholder="email" />
                        </div>
                        <input type="submit" className="btn btn-primary w-100" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;