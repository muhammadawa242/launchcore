import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { Target, Users, Shield } from 'react-feather';
import FadeInSection from './FadeInSection'; // Import the animation component

const benefits = [
    {
        icon: <Target size={48} />,
        title: "Expert Knowledge",
        text: "Our team stays ahead of regulatory changes so you don't have to."
    },
    {
        icon: <Users size={48} />,
        title: "Client-Centric",
        text: "We tailor our services to your unique business needs and goals."
    },
    {
        icon: <Shield size={48} />,
        title: "Integrity & Trust",
        text: "We operate with the highest standards of transparency and ethics."
    }
];

const WhyUs = () => {
    return (
        <section id="why-us" className={styles.whyUs}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>Why Choose LaunchCORE?</h2>
                    <p className={styles.sectionSubtitle}>Our firm is built on a foundation of expertise, integrity, and a deep commitment to our clients' success.</p>
                </FadeInSection>
                <div className={styles.benefitsGrid}>
                    {/* Map through benefits and wrap each item in FadeInSection with a staggered delay */}
                    {benefits.map((benefit, index) => (
                        <FadeInSection key={index} delay={index * 150}>
                            <div className={styles.benefitItem}>
                                <i className={styles.iconWrapper}>{benefit.icon}</i>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.text}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
