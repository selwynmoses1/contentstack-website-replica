import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import { getHeroSlides } from '../services/contentstack';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await getHeroSlides();
        if (data && data.length > 0) {
          setSlides(data);
        } else {
          // Fallback to default slides if no data from Contentstack
          setSlides([
            {
              title: 'The world\'s best digital experiences start here',
              subtitle: 'Contentstack',
              description: '',
              cta: 'Product overview',
              link: '/platform',
              gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }
          ]);
        }
      } catch (error) {
        console.error('Error loading hero slides:', error);
        // Fallback to default slides on error
        setSlides([
          {
            title: 'The world\'s best digital experiences start here',
            subtitle: 'Contentstack',
            description: '',
            cta: 'Product overview',
            link: '/platform',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (!isPaused && slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, slides.length]);

  if (loading || slides.length === 0) {
    return (
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-loading">Loading...</div>
          </div>
        </div>
      </section>
    );
  }

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

