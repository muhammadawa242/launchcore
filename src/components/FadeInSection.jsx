// src/components/FadeInSection.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

// Add the 'as' prop to allow rendering different HTML tags like 'li'
const FadeInSection = ({ children, delay = 0, animationType = 'fadeInUp', className = '', as: Component = 'div' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Component
      ref={ref}
      className={`${className} ${animationType} ${inView ? 'isVisible' : ''}`}
      style={{ transitionDelay: `${delay}ms`}}
    >
      {children}
    </Component>
  );
};

export default FadeInSection;
