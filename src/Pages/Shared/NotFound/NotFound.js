import React from 'react';
import Typography from '@mui/material/Typography';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <Typography sx={{ fontWeight: 600, paddingTop: 4, paddingBottom: 0, textAlign: 'center', color: 'success.main', fontFamily: 'Georgia' }} variant="h4" component="div">
                    Something went Wrong!! Page not found
                </Typography>
                <div><img src="https://i.ibb.co/w0LBKBF/404Page.png" alt="" /></div>
            </div>
        </div>
    );
};

export default NotFound;