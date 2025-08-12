// src/components/ServicePageLayout.jsx (SIMPLIFIED VERSION)

import React from 'react';
// We are temporarily removing the Parallax import
// import { Parallax } from 'react-scroll-parallax'; 
import styles from '../styles/ServicePage.module.css';
import FadeInSection from './FadeInSection';
import CTA from './CTA';

const ServicePageLayout = ({ heroTitle, heroSubtitle, heroImage, children }) => {

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.serviceHero}>
        <div 
          className={styles.heroBackground} 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        
        <div className={styles.heroContent}>
          <FadeInSection>
            <h1>{heroTitle}</h1>
            <p>{heroSubtitle}</p>
          </FadeInSection>
        </div>
      </header>

      <main className={styles.serviceContent}>
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <CTA />
    </div>
  );
};

export default ServicePageLayout;
