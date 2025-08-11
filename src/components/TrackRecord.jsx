import React from 'react';
import CountUp from 'react-countup';
import styles from '../styles/LandingPage.module.css';

const figures = [
  { end: 500, suffix: '+', label: 'Happy Clients' },
  { end: 99, suffix: '%', label: 'Compliance Rate' },
  { end: 1200, suffix: '+', label: 'Filings Submitted' },
  { end: 10, suffix: '+', label: 'Years of Experience' },
];

const TrackRecord = () => {
  return (
    <section id="track-record" className={styles.trackRecord}>
      <div className={styles.container}>
        <h2>Our Proven Track Record</h2>
        <div className={styles.figuresGrid}>
          {figures.map(figure => (
            <div key={figure.label} className={styles.figureItem}>
              <div className={styles.number}>
                <CountUp end={figure.end} duration={3} enableScrollSpy scrollSpyDelay={200} />
                {figure.suffix}
              </div>
              <div className={styles.label}>{figure.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
