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

  useEffect(() => {
    // This function will be called only when all assets (images, scripts, etc.) are loaded
    const handleLoad = () => {
      // Use a short timeout to prevent the loader from disappearing too abruptly
      // and to ensure the final browser render pass is complete.
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // A brief half-second buffer for a smooth transition
    };

    // Check if the document is already fully loaded (e.g., on a very fast connection)
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // If not loaded yet, add an event listener for the 'load' event
      window.addEventListener('load', handleLoad);
      
      // Cleanup: Remove the event listener when the component unmounts to prevent memory leaks
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // While isLoading is true, show the loader and nothing else.
  if (isLoading) {
    return <DimensionalLoader />;
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
