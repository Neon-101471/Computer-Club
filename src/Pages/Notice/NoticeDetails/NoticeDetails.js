import React from 'react';

const NoticeDetails = ({ notice }) => {
    return (
        <div>
            <h1>{notice?.title}</h1>
            <p className='color-green'><i className="fas fa-calendar-alt"></i> {notice?.fullDate}</p>
            <p>{notice?.description}</p>
            <div className='mt-5'>
                <a className='btn-download' href={notice?.fileLink} download>Details</a>
            </div>
        </div>
    );
};

export default NoticeDetails;