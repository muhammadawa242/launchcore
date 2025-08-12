// src/App.jsx - FINAL WORKING VERSION

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollToTop from './components/ScrollToTop'; // <-- IMPORT THE NEW COMPONENT

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
      
      {/* 
        This logic is now safe to re-introduce because the underlying
        rendering and scrolling issues are fixed.
      */}
      <FloatingActions pageType={isHomePage ? 'home' : 'service'} />

    </ParallaxProvider>
  );
}

export default App;
