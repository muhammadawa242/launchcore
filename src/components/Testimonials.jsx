import React from 'react';
import styles from '../styles/LandingPage.module.css';

const testimonialsData = [
    {
        quote: "LaunchCORE transformed our approach to tax compliance. Their proactive advice is invaluable.",
        author: "— Fatima Al-Mansoori, CEO of a Tech Startup"
    },
    {
        quote: "The most professional and knowledgeable team we've ever worked with. Highly recommended.",
        author: "— John Smith, Managing Director of an F&B Group"
    },
    {
        quote: "Navigating business setup was daunting, but LaunchCORE made it seamless and straightforward.",
        author: "— Aisha Khan, Founder of a Creative Agency"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <h2>What Our Clients Say</h2>
                <p className={styles.sectionSubtitle}>Trust and results are the cornerstones of our client relationships. Here's what they have to say about working with us.</p>
                <div className={styles.testimonialsGrid}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <blockquote>{testimonial.quote}</blockquote>
                            <cite>{testimonial.author}</cite>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
