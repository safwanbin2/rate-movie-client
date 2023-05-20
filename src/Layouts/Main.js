import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <section>
            <Navbar />
            <section className='min-h-screen flex justify-center'>
                <Outlet />
            </section>
            <Footer />
        </section>
    );
};

export default Main;