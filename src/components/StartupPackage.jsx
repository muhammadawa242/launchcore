import React from 'react';
import styles from '../styles/LandingPage.module.css';

const StartupPackage = () => {
    return (
        <section className={styles.startupPackageWrapper}>
            <div className={styles.container}>
                <div className={styles.startupPackageCard}>
                    <h2>Startup Accelerator Package</h2>
                    <p>All-in-one financial services for new businesses. Get your venture started on solid ground.</p>
                    <div className={styles.price}>
                        AED 4,999 <span>Starting From / Annually</span>
                    </div>
                    <a href="#contact" className={styles.btn}>Enquire Now</a>
                </div>
            </div>
        </section>
    );
};

export default StartupPackage;
