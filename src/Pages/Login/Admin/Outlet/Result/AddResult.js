import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddResult = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //alert set
        Swal.fire({
            title: `Are you sure to add result!!!`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //pass data in backend
                axios.post('http://localhost:5000/add-result', data)
                    .then(result => {
                        console.log(result);
                        if (result?.data?.insertedId) {
                            Swal.fire('Result! added', '', 'success')
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
            <h2 className='text-center'>Add Results</h2>

            <div className="col-md-7">
                <div className="event-form p-0 text-start">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='justify-content-start'>Result Heading</p>
                        <input type="text" {...register("name", { required: true })} placeholder="Notice Heading" />

                        <p className='d-flex justify-content-start'>Publishing Date</p>
                        <input type="date" {...register("publishing_date", { required: true })} />

                        <p className='d-flex justify-content-start'>Pdf/image Drive Public Link</p>
                        <input type="text" {...register("pdfFile", { required: true })} placeholder="pdf/image drive public URL" />

                        <p className='d-flex justify-content-start'>Description(if)</p>
                        <textarea className="" {...register("description")} placeholder="description" />

                        <input className="rounded-2 p-1 border-0 fs-4" type="submit" id='submit-btn' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddResult;