import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.aboutUsContent}>
          {/* Text slides in from the left */}
          <FadeInSection animationType="fadeInRight">
            <div className={styles.aboutText}>
              <h2 className={styles.h2Left}>A Partnership Built on Trust & Expertise</h2>
              <p>At <strong>LaunchCORE</strong>, we are more than just accountants; we are your dedicated partners. We blend deep industry knowledge with a proactive approach to provide clear, actionable advice, allowing you to focus on what you do best: growing your business.</p>
              <a href="#expertise" className={styles.btn}>Explore Our Expertise</a>
            </div>
          </FadeInSection>
          {/* Image slides in from the right */}
          <FadeInSection animationType="fadeInLeft" delay={200}>
            <div className={styles.aboutImage}>
              <Parallax speed={-10}>
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Team collaborating in a modern office" />
              </Parallax>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
