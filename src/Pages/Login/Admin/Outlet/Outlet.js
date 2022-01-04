import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NoticeForm from '../../../EventForm/NoticeForm/NoticeForm';
const Outlet = () => {
    let { path } = useRouteMatch();
    return (
        <div className='px-2 py-5'>
            <Switch>
                <Route exact path={path}>
                    <NoticeForm />
                </Route>
                <Route path={`${path}/all-programming-contest`}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur explicabo repellendus libero similique alias perspiciatis sapiente impedit. Magni minus, eaque similique in officiis debitis rem. Temporibus molestiae illum maiores.</h2>
                </Route>
            </Switch>
        </div>
    );
};

export default Outlet;