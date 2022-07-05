import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.css'

const Logo = () => {
    return <NavLink  className="logoText" to="/">Daily<span>Blog</span></NavLink>
    

};

export default Logo;