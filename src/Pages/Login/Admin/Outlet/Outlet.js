import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NoticeForm from '../../../EventForm/NoticeForm/NoticeForm';
import AddNotice from './AddNotice/AddNotice';
import AllNotice from './AllNotice/AllNotice';
import Users from './Users/Users';
const Outlet = () => {
    let { path } = useRouteMatch();
    return (
        <div className=''>
            <Switch>
                <Route exact path={path}>
                    <NoticeForm />
                </Route>
                <Route path={`${path}/all-programming-contest`}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur explicabo repellendus libero similique alias perspiciatis sapiente impedit. Magni minus, eaque similique in officiis debitis rem. Temporibus molestiae illum maiores.</h2>
                </Route>
                <Route path={`${path}/users`}>
                    <Users />
                </Route>
                <Route path={`${path}/all-notice`}>
                    <AllNotice />
                </Route>
                <Route path={`${path}/add-notice`}>
                    <AddNotice />
                </Route>
            </Switch>
        </div>
    );
};

export default Outlet;