import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        {/* This is the stylized rocket/chevron, animated with CSS */}
        <div className="loader-core"></div>

        {/* These rings will pulse outwards */}
        <div className="pulsing-rings">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>

        {/* The loading text, using the site's font */}
        <p className="loading-text">Preparing for Launch...</p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
