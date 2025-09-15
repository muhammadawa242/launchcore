import React from 'react';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection'; // Import the animation component

const teamMembers = [
    // {
    //     imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
    //     name: "John Doe",
    //     role: "Founder & Managing Partner"
    // },
    {
        imgSrc: "ceo.webp",
        name: "Mohamed Al Abeed",
        role: "CEO & Co-Founder"
    },
    {
        imgSrc: "hbd.webp",
        name: "Ligin Li",
        role: "Head of Business Development"
    }
];

const Team = () => {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <section id="team" className={styles.team}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>Meet Our Experts</h2>
                    <p className={styles.sectionSubtitle}>Our team of certified professionals is the backbone of our firm, bringing a wealth of expertise and dedication to every client interaction.</p>
                </FadeInSection>
                <div className={styles.teamGrid}>
                    {/* Map through team members and wrap each one in FadeInSection with a staggered delay */}
                    {teamMembers.map((member, index) => (
                        <FadeInSection key={index} delay={index * 150}>
                            <div className={styles.teamMember}>
                                <img src={BASE_URL+member.imgSrc} alt={member.name} loading="lazy" decoding="async" width="300" height="300" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
