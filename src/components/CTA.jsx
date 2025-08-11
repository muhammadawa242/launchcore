import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { ChevronRight } from 'react-feather';

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <h2>Ready to Launch Your Business?</h2>
                <a href="#contact" className={styles.btn}>
                    <span>Schedule Your Free Consultation</span>
                    <ChevronRight className={styles.btnIcon} />
                </a>
            </div>
        </section>
    );
};

export default CTA;
