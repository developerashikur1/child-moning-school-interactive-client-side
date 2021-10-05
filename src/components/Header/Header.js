import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        // header navs
        <div className="header-container ">
            <Nav>
                <NavLink className="nav" to="/home">Home</NavLink>           
                <NavLink className="nav" to="/courses">Courses</NavLink>
                <NavLink className="nav" to="/about">About Us</NavLink>
                <NavLink className="nav" to="/blogs">Blogs</NavLink>
                <NavLink className="nav" to="/contact">Contact Us</NavLink>
            </Nav>
        </div>
    );
};

export default Header;