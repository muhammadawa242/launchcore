// src/pages/HomePage.jsx

import React from 'react'; // Removed useState, useEffect

// Removed useInView, as it's no longer needed here
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import StartupPackage from '../components/StartupPackage';
import WhyUs from '../components/WhyUs';
import TrackRecord from '../components/TrackRecord';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

// The component is now a simple functional component with no props.
const HomePage = () => {
  return (
    <>
      <Hero />
      {/* 
        The 'ref' is removed from main, as the logic is now self-contained
        in FloatingActions.jsx
      */}
      <main>
        <About />
        <Expertise />
        <StartupPackage />
        <WhyUs />
        <TrackRecord />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <CTA />
    </>
  );
};

export default HomePage;
