// src/App.jsx

import React, { useState, useEffect } from 'react'; // <-- Import useState and useEffect
import { ParallaxProvider } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer'; // <-- Import useInView

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
import FloatingActions from './components/FloatingActions';

function App() {
  // --- START OF NEW CODE ---
  // State to control the visibility of the floating buttons
  const [actionsVisible, setActionsVisible] = useState(false);

  // This hook will give us a ref and tell us when it's in view
  const { ref: mainContentRef, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.01,   // Trigger as soon as the element peeks into view
  });

  // When the 'inView' status changes to true, update our state
  useEffect(() => {
    if (inView) {
      setActionsVisible(true);
    }
  }, [inView]);
  // --- END OF NEW CODE ---


  return (
    <ParallaxProvider>
      <Header />
      <Hero /> 
      
      {/* We attach the ref to the <main> element. When this comes into view, the animation triggers. */}
      <main ref={mainContentRef}> 
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

      {/* Pass the visibility state as a prop to the component */}
      <FloatingActions areVisible={actionsVisible} />
    </ParallaxProvider>
  );
}

export default App;
