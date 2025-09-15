import React, { useState, useEffect } from 'react';
import styles from '../styles/LandingPage.module.css';

// Get the base URL from Vite's environment variables.
// This ensures that the image paths work correctly even with a base path like '/launchcore/'.
const BASE_URL = import.meta.env.BASE_URL;

// --- MODIFIED: Expanded to 6 local images with related text ---
// NOTE: You must place all 6 of these images in your 'public' folder.
const slides = [
  // 1. The Vision (Hook)
  {
    image: `${BASE_URL}museum.jpg`,
    title: 'Your Vision, Engineered for Success',
    text: 'We help you architect a future-proof business with innovative financial and strategic planning.',
  },
  // 2. The Landscape (Opportunity)
  {
    image: `${BASE_URL}desert.jpg`,
    title: 'Navigate the Dynamic UAE Business Landscape',
    text: 'From the vast potential of a new venture to established corporate horizons, we are your expert guides.',
  },
  // 3. The Foundation (Solution)
  {
    image: `${BASE_URL}building.jpg`,
    title: 'Strategic Foundations for Lasting Growth',
    text: 'Establish your business on solid ground with our comprehensive setup, accounting, and advisory services.',
  },
  // 4. The Complexity (Challenge & Trust)
  {
    image: `${BASE_URL}building2.jpg`,
    title: 'Clarity in Complexity. Confidence in Compliance.',
    text: 'Let our experts manage corporate tax and regulatory governance so you can focus on what you do best.',
  },
  // 5. The Ambition (Partnership)
  {
    image: `${BASE_URL}museum-night.jpg`,
    title: 'Where Ambition Meets Expertise',
    text: 'Elevate your enterprise with a dedicated partner committed to turning your ambitious goals into reality.',
  },
  // 6. The Action (Invitation)
  {
    image: `${BASE_URL}museum-night2.jpg`,
    title: 'Your Future Begins with a Conversation',
    text: 'Let\'s discuss your goals. Discover how our tailored solutions can propel your business forward.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Seamlessly Launch Your Business for Success',
    text: 'From company setup to tax compliance, we provide the solid foundation your new venture needs to succeed.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Unlock Data-Driven Growth and Insights',
    text: 'Leverage our expertise in accounting and advisory to turn financial data into your most powerful asset.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Your Strategic Partner in Financial Excellence',
    text: 'We provide clear, modern financial strategies to help your business thrive with a gentle, expert touch.',
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
