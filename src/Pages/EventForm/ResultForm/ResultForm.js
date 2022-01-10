import React from 'react';
import axios from 'axios';
import './ResultForm.css';
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
        <div className='row event-container d-flex justify-content-center align-items-center py-3'>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src="https://i.ibb.co/xJkHRBn/add-event.png" className='img-fluid' alt="" />
            </div>
            <div className="col-md-7">
                <div className="event-form p-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='d-flex justify-content-start'>Contest Name</p><input {...register("name", { required: true })} placeholder="Contest name" />
                        <p className='d-flex justify-content-start'>Result Publishing Date</p><input type="date" {...register("publishing-date", { required: true })} placeholder="Result publishing date" />
                        <p className='d-flex justify-content-start'>Insert Result Image Link</p> <input {...register("img", { required: true })} placeholder="Insert image url" />
                        <p className='d-flex justify-content-start'>Result PDF Link</p> <input {...register("pdfLink", { required: true })} placeholder="Insert drive link" />
                        <input className="rounded-2 p-1 border-0 fs-4" type="submit" id='submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventForm;