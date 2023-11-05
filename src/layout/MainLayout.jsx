// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../Components/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Home/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;