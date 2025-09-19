import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection';
import aboutContent from '../content/about.json';

const About = () => {
  return (
    <section id="about" className={styles.aboutUs}>
      <div className={styles.container}>
        <div className={styles.aboutUsContent}>
          {/* Text slides in from the left */}
          <FadeInSection animationType="fadeInRight">
            <div className={styles.aboutText}>
              <h1 className={styles.h1}>{aboutContent.title}</h1>
              <h2 className={styles.h2Left}>{aboutContent.subtitle}</h2>
              {/* Use dangerouslySetInnerHTML for content with HTML tags like <strong> */}
              <p dangerouslySetInnerHTML={{ __html: aboutContent.paragraph }}></p>
              <a href={aboutContent.buttonLink} className={styles.btn}>{aboutContent.buttonText}</a>
            </div>
          </FadeInSection>
          {/* Image slides in from the right */}
          <FadeInSection animationType="fadeInLeft" delay={200}>
            <div className={styles.aboutImage}>
              <Parallax speed={-10}>
                  <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800" alt="Team collaborating in a modern office" loading="lazy" decoding="async"/>
              </Parallax>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default About;
