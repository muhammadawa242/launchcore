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
import DimensionalLoader from './components/DimensionalLoader'; // <-- IMPORT THE ADAPTED LOADER

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the animation to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3800); // Animation runs for 4s, so this is a good duration

    return () => clearTimeout(timer);
  }, []);

  // Show the loader while isLoading is true
  if (isLoading) {
    return <DimensionalLoader />;
  }

  return (
    <ParallaxProvider>
      <ScrollToAnchor />
      <ScrollToTop />
      
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
