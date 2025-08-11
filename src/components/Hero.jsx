import React, { useState, useEffect } from 'react';
import styles from '../styles/LandingPage.module.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Your Strategic Partner in Financial Excellence',
    text: 'We provide clear, modern financial strategies to help your business thrive with a gentle, expert touch.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Unlock Data-Driven Growth and Insights',
    text: 'Leverage our expertise in accounting and advisory to turn financial data into your most powerful asset.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600',
    title: 'Seamlessly Launch Your Business for Success',
    text: 'From company setup to tax compliance, we provide the solid foundation your new venture needs to succeed.',
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
              <h1>{slide.title}</h1>
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
