import React from 'react';
import AppBarSys from './appbar'
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <React.Fragment>
            <AppBarSys />
            <Outlet />
        </React.Fragment>
    )
};

export default Layout;
