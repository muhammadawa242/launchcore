import React from 'react';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection'; // Import the animation component
import testimonialsData from '../content/testimonials.json'; // <-- IMPORT THE JSON

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>What Our Clients Say</h2>
                    <p className={styles.sectionSubtitle}>Trust and results are the cornerstones of our client relationships. Here's what they have to say about working with us.</p>
                </FadeInSection>
                <div className={styles.testimonialsGrid}>
                    {/* Map through testimonials and wrap each card in FadeInSection with a staggered delay */}
                    {testimonialsData.map((testimonial, index) => (
                        <FadeInSection key={index} delay={index * 150}>
                            <div className={styles.testimonialCard}>
                                <blockquote>{testimonial.quote}</blockquote>
                                <cite>{testimonial.author}</cite>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
