import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/">
                Home
            </NavLink>

            <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/review">
                Customer Review
            </NavLink>

            <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/dashboard">
                Dashboard
            </NavLink>

            <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/blog">
                Blog
            </NavLink>

            <NavLink className={({isActive}) => (isActive ? "link-active" : "link")} to="/about">
                About
            </NavLink>
            
        </nav>
    );
};

export default Header;