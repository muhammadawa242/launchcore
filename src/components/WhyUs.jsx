// src/components/WhyUs.jsx

import React from 'react';
import styles from '../styles/LandingPage.module.css';
// Using icons that better reflect the new, more personal messaging
import { Compass, MessageSquare, Award } from 'react-feather';
import FadeInSection from './FadeInSection';

// Re-framed benefits to sound more like a promise
const benefits = [
    {
        icon: <Compass size={48} />,
        title: "Proactive Guidance",
        text: "We don't just report on the past; we help you navigate the future. We anticipate challenges and identify opportunities before they arise."
    },
    {
        icon: <MessageSquare size={48} />,
        title: "Direct, Clear Communication",
        text: "You'll work directly with our senior experts. No call centers, no run-around—just clear, actionable advice when you need it."
    },
    {
        icon: <Award size={48} />,
        title: "A True Partnership",
        text: "Your success is our success. We genuinely invest ourselves in your vision and celebrate your wins as if they were our own."
    }
];

const WhyUs = () => {
    // Get the base URL for images in the public folder, consistent with Team.jsx
    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <section id="why-us" className={styles.whyUs}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>What You Can Count On</h2>
                    <p className={styles.sectionSubtitle}>
                        Beyond the numbers, we're a team of dedicated professionals who are personally invested in your business's journey and success.
                    </p>
                </FadeInSection>
                <div className={styles.benefitsGrid}>
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

                {/* --- NEW: Personal Touch Section --- */}
                <FadeInSection delay={300}>
                    <div className={styles.founderNote}>
                        <div className={styles.founderImage}>
                            <img src={`${BASE_URL}ceo.png`} alt="Mohamed Al Abeed, CEO & Co-Founder" loading="lazy" decoding="async" />
                        </div>
                        <div className={styles.founderContent}>
                            <blockquote>
                                "We started LaunchCORE because we saw too many entrepreneurs getting lost in financial complexity. Our mission is simple: to provide the clarity and partnership that allows your vision to thrive. When you work with us, you're not just a client; you're a partner."
                            </blockquote>
                            <cite>
                                <strong>Mohamed Al Abeed</strong>
                                <br />
                                CEO & Co-Founder, LaunchCORE
                            </cite>
                        </div>
                    </div>
                </FadeInSection>

            </div>
        </section>
    );
};

export default WhyUs;
