/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Container, Nav, Navbar as ReactNav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <ReactNav collapseOnSelect expand="lg" bg="" variant="dark">
            <Container>
                <h1>Daily<span>Blog</span></h1>
                <ReactNav.Toggle aria-controls="responsive-navbar-nav" />
                <ReactNav.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ff">Blog</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/fff">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.activeNav : styles.defaultNav} to="/ffff">Contact</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink className={styles.loginHeader} to="/login">Login</NavLink>
                    <NavLink className={styles.headerSubscribe} to="/">Subscribe</NavLink>

                    </Nav>
                </ReactNav.Collapse>
            </Container>
        </ReactNav>
    );
};

export default Navbar;