import React, { useState, useEffect } from 'react';
import styles from '../styles/LandingPage.module.css';

// Get the base URL from Vite's environment variables.
// This ensures that the image paths work correctly even with a base path like '/launchcore/'.
const BASE_URL = import.meta.env.BASE_URL;

// --- SEO CHANGE: REMOVED UNNECESSARY SLIDES ---
// Rationale:
// 1. Focused Narrative: The first 6 slides tell a cohesive brand story. The last 3 were generic and diluted the message.
// 2. Performance: Fewer large, high-resolution images in the slider reduces the overall page weight and potential network requests.
// 3. Branding: Using curated, local assets creates a stronger, more consistent brand identity than generic stock photos.
const slides = [
  // 1. The Vision (Hook)
  {
    image: `${BASE_URL}museum.webp`,
    title: 'Your Vision, Engineered for Success',
    text: 'We help you architect a future-proof business with innovative financial and strategic planning.',
  },
  // 2. The Landscape (Opportunity)
  {
    image: `${BASE_URL}desert.webp`,
    title: 'Navigate the Dynamic UAE Business Landscape',
    text: 'From the vast potential of a new venture to established corporate horizons, we are your expert guides.',
  },
  // 4. The Complexity (Challenge & Trust)
  {
    image: `${BASE_URL}building2.webp`,
    title: 'Clarity in Complexity. Confidence in Compliance.',
    text: 'Let our experts manage corporate tax and regulatory governance so you can focus on what you do best.',
  },
  // 6. The Action (Invitation)
  {
    image: `${BASE_URL}museum-night2.webp`,
    title: 'Your Future Begins with a Conversation',
    text: 'Let\'s discuss your goals. Discover how our tailored solutions can propel your business forward.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.carouselContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.carouselSlide} ${index === currentSlide ? styles.active : ''}`}
          >
            {/* The background image div */}
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* The content, which sits above the background and the ::before overlay */}
            <div className={`${styles.slideContent} ${styles.container}`}>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <a href="#contact" className={`${styles.btn} ${styles.btnHero}`}>
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
