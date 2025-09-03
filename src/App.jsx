// src/App.jsx - FINAL WORKING VERSION

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollToTop from './components/ScrollToTop';
import DimensionalLoader from './components/DimensionalLoader'; // The themed loader

// Import Page Components
import HomePage from './pages/HomePage';
import BusinessSetupPage from './pages/BusinessSetupPage';
import CorporateTaxPage from './pages/CorporateTaxPage';
import AccountingPage from './pages/AccountingPage';
import BusinessAdvisoryPage from './pages/BusinessAdvisoryPage';
import VatServicesPage from './pages/VatServicesPage';
import CompliancePage from './pages/CompliancePage';


function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // --- START: SMART LOADING LOGIC ---
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);

  // Define constants for timings to keep them in one place
  const MIN_LOADER_TIME = 500; // Short to avoid SEO/perf penalties
  const LOADER_EXIT_TIME = 250; // Faster fade-out

  useEffect(() => {
    // A promise that resolves when all initial assets are loaded
    const contentLoadedPromise = new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            // Use { once: true } to automatically remove the listener after it fires
            window.addEventListener('load', () => resolve(), { once: true });
        }
    });

    // A promise that resolves after the minimum loader display time has passed
    const minTimePromise = new Promise(resolve => {
        setTimeout(resolve, MIN_LOADER_TIME);
    });

    // Wait for both the minimum time to pass AND the content to be fully loaded
    Promise.all([contentLoadedPromise, minTimePromise]).then(() => {
        // Step 1: Trigger the loader's exit animation
        setIsLoaderExiting(true);

        // Step 2: Wait for the exit animation to complete, then unmount the loader
        setTimeout(() => {
            setIsLoading(false);
        }, LOADER_EXIT_TIME);
    });
    
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // While isLoading is true, show the loader. Pass the exiting state as a prop.
  if (isLoading) {
    return <DimensionalLoader isExiting={isLoaderExiting} />;
  }
  // --- END: SMART LOADING LOGIC ---


  // Once loading is complete, render the full application.
  return (
    <ParallaxProvider>
      <ScrollToAnchor /> {/* Handles scrolling to #sections */}
      <ScrollToTop />    {/* Handles scrolling to top on new page loads */}
      
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Service Pages */}
        <Route path="/services/business-setup" element={<BusinessSetupPage />} />
        <Route path="/services/corporate-tax" element={<CorporateTaxPage />} />
        <Route path="/services/accounting" element={<AccountingPage />} />
        <Route path="/services/business-advisory" element={<BusinessAdvisoryPage />} />
        <Route path="/services/vat-services" element={<VatServicesPage />} />
        <Route path="/services/compliance" element={<CompliancePage />} />
      </Routes>
      
      <Footer />
      
      <FloatingActions pageType={isHomePage ? 'home' : 'service'} />

    </ParallaxProvider>
  );
}

export default App;
