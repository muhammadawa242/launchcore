// src/components/ProcessStepper.jsx

import React from 'react';
import FadeInSection from './FadeInSection';
import styles from '../styles/ProcessStepper.module.css'; // We will create this CSS file

const ProcessStepper = ({ steps }) => {
  return (
    <div className={styles.processContainer}>
      {steps.map((step, index) => (
        <FadeInSection key={index} animationType="fadeInUp" delay={index * 150} className={styles.stepWrapper}>
          <div className={styles.step}>
            <div className={styles.stepIconContainer}>
              <div className={styles.stepIcon}>{step.icon}</div>
            </div>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

export default ProcessStepper;
