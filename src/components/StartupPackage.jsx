// src/components/StartupPackage.jsx

import React from 'react';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection';
import { Check } from 'react-feather';

// Data-driven approach for easy updates and clarity
const packages = [
    {
        title: "Starter Accounting Package",
        description: "Perfect for new businesses needing solid financial foundations and ongoing compliance.",
        price: "AED 4,999",
        priceTerm: "Starting From / Annually",
        features: [
            "Cloud Accounting Software Setup",
            "Monthly Bookkeeping (up to 75 transactions)",
            "Quarterly Financial Reports",
            "Annual VAT Return Filing"
        ]
    },
    {
        title: "Business Setup Starter Package",
        description: "The complete solution to launch your UAE venture quickly and correctly, from A to Z.",
        price: "AED 9,450",
        priceTerm: "One-Time Fee",
        features: [
            "Jurisdiction Advisory (Mainland vs. Freezone)",
            "Trade License & Legal Documentation",
            "Establishment Card & E-Channel Registration",
            "Corporate Bank Account Opening Assistance"
        ]
    }
];

const StartupPackage = () => {
    return (
        <section id="packages" className={styles.startupPackageWrapper}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>Get Started on the Right Foot</h2>
                    <p className={styles.sectionSubtitle}>
                        We've crafted these all-in-one packages to provide new ventures with the essential services they need for a successful launch.
                    </p>
                </FadeInSection>
                
                <div className={styles.startupPackageGrid}>
                    {packages.map((pkg, index) => (
                        <FadeInSection key={index} animationType="zoomIn" delay={index * 150}>
                            <div className={styles.startupPackageCard}>
                                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                                <p className={styles.packageDescription}>{pkg.description}</p>
                                
                                <div className={styles.price}>
                                    {pkg.price}
                                    <span>{pkg.priceTerm}</span>
                                </div>

                                <ul className={styles.packageFeatures}>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <Check size={18} className={styles.featureIcon} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <a href="#contact" className={styles.btn}>Enquire Now</a>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StartupPackage;
