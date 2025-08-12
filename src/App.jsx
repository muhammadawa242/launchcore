// src/App.jsx

import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import StartupPackage from './components/StartupPackage';
import WhyUs from './components/WhyUs';
import TrackRecord from './components/TrackRecord';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions'; // <-- Import the new component

function App() {
  return (
    <ParallaxProvider>
      <Header />
      {/* 
        Hero is now a sibling to <main>, not a child.
        This allows it to be a full-screen background layer.
      */}
      <Hero /> 
      
      <main>
        {/* The rest of your page content starts here */}
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
      <Footer />

      {/* This renders the floating buttons on your page */}
      <FloatingActions />
    </ParallaxProvider>
  );
}

export default App;
