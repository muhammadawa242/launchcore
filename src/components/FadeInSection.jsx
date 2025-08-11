import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children, delay = 0, animationType = 'fadeInUp', className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      // Combine the passed className with our animation classes
      className={`${className} ${animationType} ${inView ? 'isVisible' : ''}`}
      style={{ transitionDelay: `${delay}ms`}}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
