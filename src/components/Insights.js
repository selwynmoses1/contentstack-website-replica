import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getInsights } from '../services/contentstack';
import './Insights.css';

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsights();
        if (data && data.length > 0) {
          setInsights(data);
        } else {
          // Fallback to default insights if no data from Contentstack
          setInsights([
            {
              title: 'The ultimate guide to headless CMS',
              tag: 'E-book',
              image: 'https://via.placeholder.com/300x200?text=Headless+CMS+Guide',
              link: '/resources/ebook/ultimate-guide-to-headless-cms'
            },
            {
              title: 'First-party data activation guide for marketers',
              tag: 'Report',
              image: 'https://via.placeholder.com/300x200?text=Data+Activation+Guide',
              link: '/resources/report/first-party-data-activation-guide-for-marketers'
            },
            {
              title: 'The Digital Experience Platforms Landscape, Q3 2025',
              tag: 'Report',
              image: 'https://via.placeholder.com/300x200?text=DXP+Landscape',
              link: '/resources/report/digital-experience-platforms-landscape'
            }
          ]);
        }
      } catch (error) {
        console.error('Error loading insights:', error);
        // Fallback to default insights on error
        setInsights([
          {
            title: 'The ultimate guide to headless CMS',
            tag: 'E-book',
            image: 'https://via.placeholder.com/300x200?text=Headless+CMS+Guide',
            link: '/resources/ebook/ultimate-guide-to-headless-cms'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  if (loading || insights.length === 0) {
    return null;
  }

  return (
    <section className="insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="section-title">Our latest insights</h2>
        </div>

        <div className="insights-grid">
          {insights.map((insight, index) => (
            <Link key={index} to={insight.link || '#'} className="insight-card">
              <div className="insight-image">
                {insight.image ? (
                  <img src={insight.image} alt={insight.title} />
                ) : (
                  <div className="insight-image-placeholder">{insight.title}</div>
                )}
                <span className="insight-tag">{insight.tag}</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
                {insight.description && (
                  <p className="insight-description">{insight.description}</p>
                )}
                <span className="insight-link">Read more →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="insights-footer">
          <Link to="/resources" className="view-all-link">
            View all resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Insights;

