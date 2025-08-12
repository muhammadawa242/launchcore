// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the most cross-browser compatible way
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // "auto" or "instant" avoids conflicts with smooth scrolling
    });
  }, [pathname]); // This effect runs every time the path changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
