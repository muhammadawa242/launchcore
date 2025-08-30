// src/components/Contact.jsx

import React, { useState } from 'react'; // <-- Import useState
import styles from '../styles/LandingPage.module.css';
import { Mail, Phone, MapPin } from 'react-feather';
import FadeInSection from './FadeInSection';

const Contact = () => {
    // --- START: NEW FORM HANDLING LOGIC ---
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // --- PASTE YOUR ACCESS KEY HERE ---
        const YOUR_ACCESS_KEY = "5ff97f80-a8ee-425b-8d08-d68c269eb2a3"; 
        
        const dataToSend = {
            ...formData,
            access_key: YOUR_ACCESS_KEY,
            subject: `New Contact Form Submission from ${formData.name}`,
            from_name: "LaunchCORE Website",
        };

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                console.error('Submission error:', result);
                setStatus('error');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    // --- END: NEW FORM HANDLING LOGIC ---

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2 style={{ marginBottom: '2rem' }}>Let's Talk Business</h2>
                    <p className={styles.sectionSubtitle}>Get in touch with our team today to discuss your business needs and how we can help you thrive.</p>
                </FadeInSection>
                
                <FadeInSection delay={200}>
                    <div className={styles.contactWrapper}>
                        <div className={styles.contactGrid}>
                            <FadeInSection animationType="fadeInRight" className={styles.contactInfo}>
                                <h3>Get In Touch</h3>
                                <div className={styles.contactInfoItem}>
                                    <i><Mail /></i>
                                    <p>info@launchcore.ae</p>
                                </div>
                                <div className={styles.contactInfoItem}>
                                    <i><Phone /></i>
                                    <p>+971 50 290 6344</p>
                                </div>
                                <div className={styles.contactInfoItem}>
                                    <i><MapPin /></i>
                                    <p>Sheikh Zayed Road,<br />Dubai, UAE</p>
                                </div>
                            </FadeInSection>
                            
                            <FadeInSection animationType="fadeInLeft" delay={100} className={styles.contactForm}>
                                <h3>Drop Us a Line</h3>
                                {status === 'success' ? (
                                    <div style={{ textAlign: 'center', padding: '2rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4>Thank you for your message!</h4>
                                        <p>We've received your submission and will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="text" 
                                                name="name"
                                                placeholder="Your Name" 
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <input 
                                                type="email" 
                                                name="email"
                                                placeholder="Your Email" 
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <textarea 
                                                name="message" 
                                                rows="5" 
                                                placeholder="Your Message" 
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <button type="submit" className={styles.btn} disabled={isSubmitting}>
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                        {status === 'error' && (
                                            <p style={{ color: 'red', marginTop: '1rem' }}>
                                                Something went wrong. Please try again later.
                                            </p>
                                        )}
                                    </form>
                                )}
                            </FadeInSection>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
};

export default Contact;
