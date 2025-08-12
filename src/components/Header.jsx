// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink
import styles from '../styles/LandingPage.module.css';
import logo from '../assets/launch.png';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.container}>
                {/* Use Link for the logo to go to the homepage */}
                <Link to="/" className={styles.logoContainer}>
                    <img src={logo} alt="LaunchCORE Logo" />
                </Link>
                <nav className={styles.mainNav}>
                    <ul>
                        {/* 
                          Use NavLink for navigation links. 
                          It automatically adds an 'active' class to the current page's link,
                          which matches your existing CSS perfectly.
                        */}
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/#about">About</NavLink></li>
                        <li><NavLink to="/#expertise">Services</NavLink></li>
                        <li><NavLink to="/#team">Team</NavLink></li>
                        <li><NavLink to="/#contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
