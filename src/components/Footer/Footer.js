import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (

        // footer container
        <div className="footer-container">
            <div className="mb-5">
                <h1>Child Morning School (CMS)</h1>
            </div>

            {/* footer icons */}
            <div className="mb-5">
            <i class="fab icons fa-facebook-f"></i>
            <i class="fab icons fa-twitter"></i>
            <i class="fab icons fa-google-plus-g"></i>
            </div>
            <div className="mb-5">


            {/* footer nav */}
            <Nav className="footer-nav-div justify-content-center">
                <NavLink className="footer-nav" to="/home">Home</NavLink>           
                <NavLink className="footer-nav" to="/services">Services</NavLink>
                <NavLink className="footer-nav" to="/about">About Us</NavLink>
                <NavLink className="footer-nav" to="/blogs">Blogs</NavLink>
                <NavLink className="footer-nav" to="/contact">Contact Us</NavLink>
            </Nav>
            </div>

            {/* copyright section */}
            <div className="mb-5">
            <p>CMS © 2021. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;