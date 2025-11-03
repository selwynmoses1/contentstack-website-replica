import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getCustomerStories, onEntryChange } from '../services/contentstack';
import './CustomerStories.css';

const CustomerStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await getCustomerStories();
        if (data && data.length > 0) {
          setStories(data);
        } else {
          // Fallback to default stories if no data from Contentstack
          setStories([
            {
              title: 'Walmart scales globally with Contentstack',
              description: 'Learn how Walmart transformed their digital presence with our headless CMS solution.',
              image: 'https://via.placeholder.com/400x250?text=Walmart+Case+Study',
              link: '/case-studies/walmart'
            },
            {
              title: 'Mattel delivers magical experiences',
              description: 'Discover how Mattel created engaging digital experiences for children worldwide.',
              image: 'https://via.placeholder.com/400x250?text=Mattel+Case+Study',
              link: '/case-studies/mattel'
            },
            {
              title: 'ASICS runs ahead with personalization',
              description: 'See how ASICS leveraged our platform to deliver personalized customer experiences.',
              image: 'https://via.placeholder.com/400x250?text=ASICS+Case+Study',
              link: '/case-studies/asics'
            }
          ]);
        }
      } catch (error) {
        console.error('Error loading customer stories:', error);
        // Fallback to default stories on error
        setStories([
          {
            title: 'Walmart scales globally with Contentstack',
            description: 'Learn how Walmart transformed their digital presence with our headless CMS solution.',
            image: 'https://via.placeholder.com/400x250?text=Walmart+Case+Study',
            link: '/case-studies/walmart'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
    // Subscribe to Live Preview updates
    onEntryChange(fetchStories);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  if (loading || stories.length === 0) {
    return null;
  }

  return (
    <section className="customer-stories">
      <div className="customer-stories-container">
        <div className="customer-stories-header">
          <h2 className="section-title">Powering brand breakthroughs</h2>
          <Link to="/case-studies" className="view-all-link">
            View all customer stories
          </Link>
        </div>

        <div className="customer-stories-carousel">
          <button
            className="carousel-btn prev"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <FiChevronLeft />
          </button>

          <div className="carousel-content">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <Link to={story.link || '#'} className="story-card">
                  <div className="story-image">
                    {story.image ? (
                      <img src={story.image} alt={story.title || story.companyName || 'Customer story'} />
                    ) : (
                      <div className="story-image-placeholder">{story.companyName || story.title}</div>
                    )}
                  </div>
                  <div className="story-content">
                    <h3 className="story-title">{story.title || story.companyName}</h3>
                    <p className="story-description">{story.description}</p>
                    {story.metricValue && story.metricLabel && (
                      <div className="story-metric">
                        <strong>{story.metricValue}</strong> {story.metricLabel}
                      </div>
                    )}
                    <span className="story-link">Read more →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;

