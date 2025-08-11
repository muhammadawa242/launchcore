import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { Mail, Phone, MapPin } from 'react-feather';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 style={{ marginBottom: '2rem' }}>Let's Talk Business</h2>
                <p className={styles.sectionSubtitle}>Get in touch with our team today to discuss your business needs and how we can help you thrive.</p>
                <div className={styles.contactWrapper}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h3>Get In Touch</h3>
                            <div className={styles.contactInfoItem}>
                                <i><Mail /></i>
                                <p>info@launchcore.com</p>
                            </div>
                            <div className={styles.contactInfoItem}>
                                <i><Phone /></i>
                                <p>+971 4 123 4567</p>
                            </div>
                            <div className={styles.contactInfoItem}>
                                <i><MapPin /></i>
                                <p>Sheikh Zayed Road,<br />Dubai, UAE</p>
                            </div>
                        </div>
                        <div className={styles.contactForm}>
                            <h3>Drop Us a Line</h3>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}><input type="text" placeholder="Your Name" required /></div>
                                <div className={styles.formGroup}><input type="email" placeholder="Your Email" required /></div>
                                <div className={styles.formGroup}><textarea name="message" rows="5" placeholder="Your Message" required></textarea></div>
                                <button type="submit" className={styles.btn}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
