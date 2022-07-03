import React from 'react';
import Navbar from '../../client/navbar/Navbar';
import './Layout.css'
import Footer from '../../client/pages/Footer/Footer';



const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="layoutContainer">
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;