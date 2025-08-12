// src/components/ProcessStepperVertical.jsx

import React from 'react';
import FadeInSection from './FadeInSection';
import styles from '../styles/ProcessStepperVertical.module.css'; // We will create this CSS file

const ProcessStepperVertical = ({ steps }) => {
  return (
    <div className={styles.stepperContainer}>
      <ol className={styles.stepperList}>
        {steps.map((step, index) => (
          <FadeInSection key={index} as="li" className={styles.stepItem}>
            <div className={styles.stepMarker}>
              <div className={styles.stepIcon}>{step.icon}</div>
            </div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </FadeInSection>
        ))}
      </ol>
    </div>
  );
};

export default ProcessStepperVertical;
