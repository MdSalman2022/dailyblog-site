/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Container, Nav, Navbar as ReactNav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <ReactNav collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <h1>Daily<span>Blog</span></h1>
                <ReactNav.Toggle className='navtoggle' aria-controls="responsive-navbar-nav" />
                <ReactNav.Collapse className='navtoggle'  id="responsive-navbar-nav">
                    <Nav className="m-auto nav">
                        <NavLink className="defaultNav" to="/">Home</NavLink>
                        <NavLink className="defaultNav" to="/ff">Blog</NavLink>
                        <NavLink className="defaultNav" to="/fff">About</NavLink>
                        <NavLink className="defaultNav" to="/ffff">Contact</NavLink>
                    </Nav>
                    <Nav className='auth'>
                    <NavLink className="loginHeader" to="/login">Login</NavLink>
                    <NavLink className="headerSubscribe" to="/">Subscribe</NavLink>

                    </Nav>
                </ReactNav.Collapse>
            </Container>
        </ReactNav>
    );
};

export default Navbar;