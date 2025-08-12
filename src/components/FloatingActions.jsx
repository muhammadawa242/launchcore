// src/components/FloatingActions.jsx

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'react-feather';
import './FloatingActions.css'; 
import WhatsAppIcon from '../assets/whatsapp-icon.svg';

// Accept the `areVisible` prop from App.jsx
const FloatingActions = ({ areVisible }) => {
    const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

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

    const whatsappNumber = '971501234567'; 
    const officePhoneNumber = '+97141234567';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your services.`;

    return (
        <>
            {/* 
              Add a conditional class here. 
              The container is either hidden or visible based on the prop. 
            */}
            <div className={`floating-actions-container ${areVisible ? 'is-visible' : ''}`}>
                <a 
                    href={whatsappLink} 
                    className="floating-action-btn whatsapp-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                >
                    <img src={WhatsAppIcon} alt="WhatsApp" />
                </a>

                <a 
                    href={`tel:${officePhoneNumber}`}
                    className="floating-action-btn contact-btn"
                    aria-label="Call our office"
                >
                    <Phone size={24} />
                </a>
            </div>
            
            {/* The Back to Top button's logic remains unchanged */}
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
