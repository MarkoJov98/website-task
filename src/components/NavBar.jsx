import React from "react";
import "../styles/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
    )
};

export default NavBar;