import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AddNotice from './AddNotice/AddNotice';
import AddProgrammingContest from './AddProgrammingContest/AddProgrammingContest';
import AllNotice from './AllNotice/AllNotice';
import AddStudent from './Department/AddStudent';
import AddTeacher from './Department/AddTeacher';
import Students from './Department/Students';
import Teachers from './Department/Teachers';
import AddExecutive from './Executive/AddExecutive';
import Executive from './Executive/Executive';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddResult from './Result/AddResult';
import Results from './Result/Results';
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
                <AdminRoute path={`${path}/add-programming-contest`}>
                    <AddProgrammingContest />
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
                <AdminRoute path={`${path}/results`}>
                    <Results />
                </AdminRoute>
                <AdminRoute path={`${path}/add-new-results`}>
                    <AddResult />
                </AdminRoute>
                <AdminRoute path={`${path}/all-executive`}>
                    <Executive />
                </AdminRoute>
                <AdminRoute path={`${path}/add-executive`}>
                    <AddExecutive />
                </AdminRoute>
                <AdminRoute path={`${path}/add-student`}>
                    <AddStudent />
                </AdminRoute>
                <AdminRoute path={`${path}/students`}>
                    <Students />
                </AdminRoute>
                <AdminRoute path={`${path}/add-teacher`}>
                    <AddTeacher />
                </AdminRoute>
                <AdminRoute path={`${path}/teachers`}>
                    <Teachers />
                </AdminRoute>
            </Switch>
        </div>
    );
};

export default Outlet;