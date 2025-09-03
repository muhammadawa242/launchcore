import React from 'react';
import './DimensionalLoader.css';

// We'll use one of the hero images for a professional and consistent look.
// Make sure 'desert.jpg' is in your /public folder.
const BASE_URL = import.meta.env.BASE_URL;
const bgImageUrl = `${BASE_URL}desert.jpg`;

const DimensionalLoader = ({ isExiting }) => {
  return (
    <div 
      className={`loader-body ${isExiting ? 'exiting' : ''}`} 
      style={{ backgroundImage: `url(${bgImageUrl})` }}
      role="status" aria-live="polite" aria-label="Loading"
    >
      {/* This new div creates the dark overlay, identical to the hero section */}
      <div className="loader-overlay"></div>
      
      <div className="dimensional-progress" aria-hidden="true">
        <div className="dimensional-track">
          <div className="dimensional-fill"></div>
        </div>
        <div className="particle-burst"></div>
        <div className="fragment-container">
          <div className="fragment" id="frag1"></div>
          <div className="fragment" id="frag2"></div>
          <div className="fragment" id="frag3"></div>
        </div>
        <div className="glitch-label">Loading...</div>
      </div>
    </div>
  );
};

export default DimensionalLoader;
