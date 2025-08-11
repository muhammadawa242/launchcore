import React from 'react';
import styles from '../styles/LandingPage.module.css';
import { Briefcase, Percent, BookOpen, CheckSquare, TrendingUp, Award } from 'react-feather';
import FadeInSection from './FadeInSection';

const services = [
    { icon: <Award size={36} />, title: "Business Setup", text: "Guiding you through every step of establishing your company in the UAE.", img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400&h=250" },
    { icon: <Briefcase size={36} />, title: "Corporate Tax", text: "Comprehensive solutions for corporate tax registration, filing, and strategic planning.", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400&h=250" },
    { icon: <BookOpen size={36} />, title: "Accounting", text: "Meticulous record-keeping to provide a clear view of your financial health.", img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400&h=250" },
    { icon: <TrendingUp size={36} />, title: "Business Advisory", text: "Strategic insights to drive growth, improve profitability, and manage risk.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400&h=250" },
    { icon: <Percent size={36} />, title: "VAT Services", text: "Expert handling of VAT registration, returns, compliance, and advisory.", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=400&h=250" },
    { icon: <CheckSquare size={36} />, title: "Compliance", text: "Navigating regulatory requirements to keep your business secure and compliant.", img: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" },
];

const ExpertiseCard = ({ icon, title, text, img }) => (
    <div className={styles.expertiseCard}>
        <div className={styles.expertiseCardImage}>
            <img src={img} alt={`${title} illustration`} />
        </div>
        <div className={styles.expertiseCardContent}>
            <div className={styles.expertiseCardHeader}>
                <i className={styles.iconWrapper}>{icon}</i>
                <h3>{title}</h3>
            </div>
            <p>{text}</p>
        </div>
    </div>
);

const Expertise = () => {
    return (
        <section id="expertise" className={styles.expertise}>
            <div className={styles.container}>
                <FadeInSection>
                    <h2>Our Expertise</h2>
                    <p className={styles.sectionSubtitle}>We offer a comprehensive suite of services designed to ensure your financial health and compliance at every stage of business.</p>
                </FadeInSection>
                <div className={styles.expertiseGrid}>
                    {services.map((service, index) => (
                        <FadeInSection key={service.title} animationType="zoomIn" delay={index * 100}>
                            <ExpertiseCard {...service} />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
