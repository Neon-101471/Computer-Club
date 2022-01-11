import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddNotice from './AddNotice/AddNotice';
import AllNotice from './AllNotice/AllNotice';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Users from './Users/Users';
const Outlet = () => {
    let { path } = useRouteMatch();
    return (
        <div className=''>
            <Switch>
                <Route exact path={path}>
                    <h2 className='fw-bolder my-5 py-5 text-center'>Start to operation your profile</h2>
                </Route>
                <AdminRoute path={`${path}/all-programming-contest`}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur explicabo repellendus libero similique alias perspiciatis sapiente impedit. Magni minus, eaque similique in officiis debitis rem. Temporibus molestiae illum maiores.</h2>
                </AdminRoute>
                <AdminRoute path={`${path}/users`}>
                    <Users />
                </AdminRoute>
                <AdminRoute path={`${path}/make-admin`}>
                    <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/all-notice`}>
                    <AllNotice />
                </AdminRoute>
                <AdminRoute path={`${path}/add-notice`}>
                    <AddNotice />
                </AdminRoute>
            </Switch>
        </div>
    );
};

export default Outlet;