import React from 'react';
import styles from '../styles/LandingPage.module.css';
import logo from '../assets/launch.png'; // Make sure your logo is in src/assets/

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.container}>
                <a href="#home" className={styles.logoContainer}>
                    <img src={logo} alt="LaunchCORE Logo" />
                </a>
                <nav className={styles.mainNav}>
                    <ul>
                        <li><a href="#home" className={styles.active}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#expertise">Services</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
