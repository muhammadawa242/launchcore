import React from 'react';
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
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#expertise">Services</a></li>
                            <li><a href="#team">Our Team</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#expertise">Corporate Tax</a></li>
                            <li><a href="#expertise">VAT Services</a></li>
                            <li><a href="#expertise">Accounting</a></li>
                            <li><a href="#expertise">Business Setup</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerSocial}>
                        <h4>Follow Us</h4>
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
