import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Insights.css';

const Insights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const insights = [
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
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % insights.length);
  };

  return (
    <section className="insights">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="section-title">Our latest insights</h2>
        </div>

        <div className="insights-grid">
          {insights.map((insight, index) => (
            <Link key={index} to={insight.link} className="insight-card">
              <div className="insight-image">
                <img src={insight.image} alt={insight.title} />
                <span className="insight-tag">{insight.tag}</span>
              </div>
              <div className="insight-content">
                <h3 className="insight-title">{insight.title}</h3>
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

