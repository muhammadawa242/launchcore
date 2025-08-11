import React from 'react';
import styles from '../styles/LandingPage.module.css';

const teamMembers = [
    {
        imgSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
        name: "John Doe",
        role: "Founder & Managing Partner"
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
        name: "Jane Smith",
        role: "Senior Tax Consultant"
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=300",
        name: "Alex Chen",
        role: "Head of Accounting"
    }
];

const Team = () => {
    return (
        <section id="team" className={styles.team}>
            <div className={styles.container}>
                <h2>Meet Our Experts</h2>
                <p className={styles.sectionSubtitle}>Our team of certified professionals is the backbone of our firm, bringing a wealth of expertise and dedication to every client interaction.</p>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamMember}>
                            <img src={member.imgSrc} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
