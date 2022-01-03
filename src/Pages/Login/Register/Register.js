import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleonBlur = event => {
        const field = event.target.name;
        const value = event.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = event => {
        if (loginData.password !== loginData.passwordRetype) {
            alert('Your password did not matched');
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history,);
        event.preventDefault();
    }
    return (
        <Container>
            <div className="row d-flex flex-md-row-reverse">
                <div className="col-sm-6 mt-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className='image-container p-5'>
                                <img src="https://i.ibb.co/R66YGWp/2.png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mt-5 d-flex align-items-center">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography variant="h4" gutterBottom sx={{ color: '#3c60e5', textAlign: 'center' }}>Please Register</Typography>
                            {!isLoading && <form onSubmit={handleLoginSubmit}>

                                {/* Name */}
                                <TextField
                                    sx={{ width: "100%", my: 1 }}
                                    label="Your name"
                                    type="text"
                                    name="name"
                                    onBlur={handleonBlur}
                                    placeholder="Your name"
                                    variant="standard" />

                                {/* Email */}
                                <TextField
                                    sx={{ width: "100%", my: 1 }}
                                    // id="standard-basic"
                                    label="Your email"
                                    type="email"
                                    name="email"
                                    onBlur={handleonBlur}
                                    placeholder="example@gmail.com"
                                    variant="standard" />

                                {/* Password */}
                                <TextField
                                    sx={{ width: "100%", my: 1 }}
                                    // id="standard-basic"
                                    label="Your password"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    onBlur={handleonBlur}
                                    variant="standard" />

                                {/* Re-type Password */}
                                <TextField
                                    sx={{ width: "100%", my: 1 }}
                                    // id="standard-basic"
                                    label="Re-type your password"
                                    placeholder="re-type password"
                                    type="password"
                                    name="passwordRetype"
                                    onBlur={handleonBlur}
                                    variant="standard" />

                                <Button
                                    variant="contained"
                                    sx={{ width: "100%", my: 1 }}
                                    type="submit"
                                >Register</Button>

                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login"
                                >
                                    <br />
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>}
                            {isLoading && <CircularProgress />}
                            {
                                user?.email && <Alert severity="success">Congratulations! You're successfully registered!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
};

export default Register;