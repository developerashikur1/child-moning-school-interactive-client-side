import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container ">
            <Nav>
                <NavLink className="nav" to="/home">Home</NavLink>           
                <NavLink className="nav" to="/services">Services</NavLink>
                <NavLink className="nav" to="/about">About Us</NavLink>
                <NavLink className="nav" to="/blogs">Blogs</NavLink>
            </Nav>
        </div>
    );
};

export default Header;