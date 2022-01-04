import React from 'react';
import axios from 'axios';
import './NoticeForm.css';
import { useForm } from "react-hook-form";

const EventForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://evening-stream-40669.herokuapp.com/products-collection', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('New product successfully added.');
                    reset();
                }
            })
    }
    return (
        <div className='row event-container d-flex justify-content-center align-items-center'>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src="https://i.ibb.co/xJkHRBn/add-event.png" className='img-fluid' alt="" />
            </div>
            <div className="col-md-7">
                <div className="event-form p-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='d-flex justify-content-start'>Notice Heading</p> <input {...register("name", { required: true, maxLength: 20 })} placeholder="Notice Heading" />
                        <p className='d-flex justify-content-start'>Notice Publishing Date</p> <input type="date" {...register("publishing-date", { required: true })} placeholder="Product price" />
                        <p className='d-flex justify-content-start'>Notice Description</p><textarea className="" {...register("description", { required: true })} placeholder="Notice description" />
                        <input className="rounded-2 p-1 border-0 fs-4" type="submit" id='submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventForm;