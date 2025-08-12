// src/components/FloatingActions.jsx

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'react-feather';
import './FloatingActions.css'; // Styles for this component
import WhatsAppIcon from '../assets/whatsapp-icon.svg';

const FloatingActions = () => {
    const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

    // Shows the "Back to Top" button after scrolling down 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsTopButtonVisible(true);
        } else {
            setIsTopButtonVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // **IMPORTANT**: Replace with your actual contact details
    const whatsappNumber = '971501234567'; 
    const officePhoneNumber = '+97141234567';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your services.`;

    return (
        // Use a React Fragment to return multiple elements
        <>
            {/* Container for the buttons on the left side */}
            <div className="floating-actions-container">
                {/* WhatsApp Button */}
                <a 
                    href={whatsappLink} 
                    className="floating-action-btn whatsapp-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                >
                    <img src={WhatsAppIcon} alt="WhatsApp" />
                </a>

                {/* Contact Button (Opens the dialer) */}
                <a 
                    href={`tel:${officePhoneNumber}`}
                    className="floating-action-btn contact-btn"
                    aria-label="Call our office"
                >
                    <Phone size={24} />
                </a>
            </div>
            
            {/* Standalone Back to Top Button (Visible on Scroll) */}
            {isTopButtonVisible && (
                <a 
                    href="#home" 
                    className="floating-action-btn back-to-top-btn"
                    aria-label="Go to top of page"
                >
                    <ArrowUp size={24} />
                </a>
            )}
        </>
    );
};

export default FloatingActions;
