import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProgrammingContest = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //alert set
        Swal.fire({
            title: `Are you sure to add ${data.name} event!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass data in backend
                axios.post('https://computer-club-team.herokuapp.com/add-event', data)
                    .then(result => {
                        if (result?.data?.insertedId) {
                            Swal.fire(`${data.eventType} Event! added`, '', 'success')
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
        <div className='row event-container d-flex justify-content-center align-items-center py-5'>
            <h2 className='text-center'>Add Programming Contest</h2>

            <div className="col-md-7">
                <div className="event-form p-0 text-start">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ height: '600px' }}>
                        <p className='justify-content-start'>Event Type</p>
                        <select className="form-select" {...register("eventType", { required: true })}>
                            <option>Select One</option>
                            <option >Programming Contest</option>
                            <option >WorkShop</option>
                            <option >Webinars</option>
                            <option >Seminar</option>
                            <option >Boot Camp</option>
                        </select>
                        <p className='justify-content-start'>Programming Contest Name</p>
                        <input type="text" {...register("name", { required: true })} placeholder="Programming Contest Name" />

                        <p className='justify-content-start'>Starts On</p>
                        <input type="date" {...register("starts_on")} placeholder="14 January 2022" />

                        <p className='d-flex justify-content-start'>Starts At</p>
                        <input type="time" {...register("starts_at", { required: true })} />

                        <p className='d-flex justify-content-start'>Problem Number</p>
                        <input type="number" {...register("problem_number", { required: true })} placeholder="10" />

                        <p className='d-flex justify-content-start'>Contest Duration</p>
                        <input type="text" {...register("contest_duration", { required: true })} placeholder="3 Hours" />

                        <p className='d-flex justify-content-start'>Details and Prizing</p>
                        <textarea {...register("details", { required: true })} placeholder="Details information of the programming contest">

                        </textarea>

                        <input className="rounded-2 p-1 border-0 fs-4" type="submit" id='submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProgrammingContest;