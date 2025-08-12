// src/components/FloatingActions.jsx

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'react-feather';
import './FloatingActions.css'; 
import WhatsAppIcon from '../assets/whatsapp-icon.svg';

// The component now accepts a 'pageType' prop ('home' or 'service')
const FloatingActions = ({ pageType }) => {
    // State to control visibility of the main action buttons
    const [areActionsVisible, setAreActionsVisible] = useState(pageType === 'service');
    
    // State to control visibility of the "Back to Top" button
    const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

    // This effect handles the "Back to Top" button's appearance on scroll
    useEffect(() => {
        const toggleTopButtonVisibility = () => {
            if (window.scrollY > 300) {
                setIsTopButtonVisible(true);
            } else {
                setIsTopButtonVisible(false);
            }
        };

        window.addEventListener('scroll', toggleTopButtonVisibility);

        // This effect also handles the main buttons' appearance on the HOME page
        if (pageType === 'home') {
            const showActionsOnScroll = () => {
                // Show buttons after scrolling past the 100vh hero section
                if (window.scrollY > window.innerHeight * 0.8) {
                    setAreActionsVisible(true);
                    // Remove listener once buttons are shown to avoid re-running
                    window.removeEventListener('scroll', showActionsOnScroll);
                }
            };
            window.addEventListener('scroll', showActionsOnScroll);

            // Cleanup function to remove both listeners
            return () => {
                window.removeEventListener('scroll', toggleTopButtonVisibility);
                window.removeEventListener('scroll', showActionsOnScroll);
            };
        }

        // Cleanup for service pages (only one listener)
        return () => {
            window.removeEventListener('scroll', toggleTopButtonVisibility);
        };

    }, [pageType]); // Rerun this effect if the pageType changes

    const whatsappNumber = '971501234567'; 
    const officePhoneNumber = '+97141234567';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in your services.`;

    return (
        <>
            {/* The container is now controlled by its own internal state */}
            <div className={`floating-actions-container ${areActionsVisible ? 'is-visible' : ''}`}>
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
            
            {/* The Back to Top button's logic is separate and works perfectly */}
            {isTopButtonVisible && (
                <a 
                    href="#home" // Note: This should ideally link to the top of the page, '#' is better
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
