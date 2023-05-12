import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Login from '../Login/Login';
import './Layout.css'

const LoginLayout = () => {
    return (
        <div  className="bg-green-100 layout-fix">
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;