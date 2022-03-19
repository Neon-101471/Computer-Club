import React from 'react';
import axios from 'axios';
import './NoticeForm.css';
import { useForm } from "react-hook-form";

const EventForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const date = data.publishing_date;
        const month = date.split('-');
        const chrMonth = months[month[1] - 1];
        data.chrMonth = chrMonth;
        axios.post('https://fast-fortress-28219.herokuapp.com/add-notice', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('Notice successfully added.');
                    reset();
                }
            })
    }
    return (
        <div className='row event-container d-flex justify-content-center align-items-center py-5'>
            <h2 className='text-center'>Add Notice</h2>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src="https://i.ibb.co/xJkHRBn/add-event.png" className='img-fluid' alt="" />
            </div>
            <div className="col-md-7">
                <div className="event-form p-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='d-flex justify-content-start'>Notice Heading</p>
                        <input type="text" {...register("name", { required: true })} placeholder="Notice Heading" />

                        <p className='d-flex justify-content-start'>Notice Publishing Date</p>
                        <input type="date" {...register("publishing_date", { required: true })} placeholder="Product price" />

                        <p className='d-flex justify-content-start'>Pdf Drive Public Link</p>
                        <input type="text" {...register("pdfFile", { required: true })} placeholder="pdf drive public URL" />

                        <p className='d-flex justify-content-start'>Notice Description</p>
                        <textarea className="" {...register("description", { required: true })} placeholder="Notice description" />

                        <input className="rounded-2 p-1 border-0 fs-4" type="submit" id='submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventForm;