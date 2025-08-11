import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css'; // We'll create this CSS file next

const FadeInSection = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
    delay: props.delay || 0 // Optional delay from props
  });

  return (
    <div
      ref={ref}
      className={`fadeInSection ${inView ? 'isVisible' : ''}`}
      style={{ transitionDelay: `${props.delay}ms`}}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
