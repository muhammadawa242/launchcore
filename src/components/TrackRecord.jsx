import React from 'react';
import CountUp from 'react-countup';
import styles from '../styles/LandingPage.module.css';
import FadeInSection from './FadeInSection';

const figures = [
  { end: 200, suffix: '+', label: 'Happy Clients' },
  { end: 99, suffix: '%', label: 'Compliance Rate' },
  { end: 400, suffix: '+', label: 'Filings Submitted' },
  { end: 2, suffix: '+', label: 'Years of Experience' },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className={styles.trackRecord}>
      <div className={styles.container}>
        <FadeInSection>
            <h2>Our Proven Track Record</h2>
        </FadeInSection>
        <div className={styles.figuresGrid}>
          {figures.map((figure, index) => (
            <FadeInSection key={figure.label} animationType="zoomIn" delay={index * 150}>
                <div className={styles.figureItem}>
                <div className={styles.number}>
                    <CountUp end={figure.end} duration={3} enableScrollSpy scrollSpyDelay={200} />
                    {figure.suffix}
                </div>
                <div className={styles.label}>{figure.label}</div>
                </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
