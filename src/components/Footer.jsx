// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from '../styles/LandingPage.module.css';
import logo from '../assets/launch.png';
import { Linkedin, Twitter, Instagram } from 'react-feather';

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    <div className={styles.footerAbout}>
                        <img src={logo} alt="LaunchCORE Logo" className={styles.footerLogo} />
                        <p>Establish, Evolve, Excel. We are your trusted partners in navigating the complexities of business finance.</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Quick Links</h4>
                        <ul>
                            {/* Use Link for hash links on the homepage */}
                            <li><Link to="/#about">About Us</Link></li>
                            <li><Link to="/#expertise">Services</Link></li>
                            <li><Link to="/#team">Our Team</Link></li>
                            {/* Assuming you will create a privacy page at /privacy */}
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Services</h4>
                        <ul>
                            {/* Use Link to go to the actual service pages */}
                            <li><Link to="/services/corporate-tax">Corporate Tax</Link></li>
                            <li><Link to="/services/vat-services">VAT Services</Link></li>
                            <li><Link to="/services/accounting">Accounting</Link></li>
                            <li><Link to="/services/business-setup">Business Setup</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSocial}>
                        <h4>Follow Us</h4>
                        {/* External links remain as 'a' tags */}
                        <ul>
                            <li><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a></li>
                            <li><a href="https://twitter.com" aria-label="Twitter"><Twitter /></a></li>
                            <li><a href="https://instagram.com" aria-label="Instagram"><Instagram /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    &copy; {new Date().getFullYear()} LaunchCORE. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
