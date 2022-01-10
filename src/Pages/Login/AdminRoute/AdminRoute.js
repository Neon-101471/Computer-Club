import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    if (isLoading || !admin) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
        </div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};


export default AdminRoute;