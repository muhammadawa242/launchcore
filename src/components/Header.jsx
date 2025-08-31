// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/LandingPage.module.css';
import logo from '../assets/logo.png';
import { Menu, X } from 'react-feather'; // Import icons for mobile menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to detect scroll and add a background to the header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect to lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        // The main header element is now full-width
        <header className={`${styles.mainHeader} ${isScrolled ? styles.scrolled : ''}`}>
            {/* The container inside handles the alignment */}
            <div className={styles.headerContainer}>
                <Link to="/" className={styles.logoContainer} onClick={closeMenu}>
                    <img src={logo} alt="LaunchCORE Logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.mainNav}>
                    <ul>
                        <li><NavLink to="/#about">About</NavLink></li>
                        <li><NavLink to="/#expertise">Services</NavLink></li>
                        <li><NavLink to="/#team">Team</NavLink></li>
                        <li><NavLink to="/#contact">Contact</NavLink></li>
                        <li>
                            <Link to="/#contact" className={styles.navCta}>
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button className={styles.mobileMenuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li><NavLink to="/#about" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/#expertise" onClick={closeMenu}>Services</NavLink></li>
                    <li><NavLink to="/#team" onClick={closeMenu}>Team</NavLink></li>
                    <li><NavLink to="/#contact" onClick={closeMenu}>Contact</NavLink></li>
                    <li>
                        <Link to="/#contact" className={styles.mobileNavCta} onClick={closeMenu}>
                            Get a Free Consultation
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
