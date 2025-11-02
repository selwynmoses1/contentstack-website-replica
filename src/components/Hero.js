import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      title: 'The world\'s best digital experiences start here',
      subtitle: 'Contentstack',
      description: '',
      cta: 'Product overview',
      link: '/platform',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Unlock your future',
      subtitle: 'Agent OS',
      description: 'Seamlessly integrate intelligent agents, AI-powered automation and advanced workflows, all in one platform',
      cta: 'Agent OS',
      link: '/platforms/ai',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Welcome to the Context Economy',
      subtitle: 'Personalization',
      description: 'One-size-fits-all digital experiences are over. Adapting to customers in the moment is critical.',
      cta: 'Join us',
      link: '/blog/announcements/welcome-to-the-context-economy',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Modernize your CMS',
      subtitle: 'Headless CMS',
      description: 'Create experiences faster across more channels with an easy-to-use, future-ready platform',
      cta: 'Explore the platform',
      link: '/platforms/headless-cms',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hero-slide"
            >
              <div className="hero-slide-content">
                <h1 className="hero-subtitle">{slides[currentSlide].subtitle}</h1>
                <h2 className="hero-title">{slides[currentSlide].title}</h2>
                {slides[currentSlide].description && (
                  <p className="hero-description">{slides[currentSlide].description}</p>
                )}
                <Link to={slides[currentSlide].link} className="hero-cta btn-primary">
                  {slides[currentSlide].cta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-controls">
          <button
            className="hero-control-btn"
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {isPaused ? <FiPlay /> : <FiPause />}
          </button>
          <button
            className="hero-control-btn"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>
          <button
            className="hero-control-btn"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className="hero-indicator-progress"
                style={{
                  background: index === currentSlide ? slides[currentSlide].gradient : undefined
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <div
        className="hero-background"
        style={{ background: slides[currentSlide].gradient }}
      />
    </section>
  );
};

export default Hero;

