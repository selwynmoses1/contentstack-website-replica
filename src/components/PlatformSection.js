import React from 'react';
import { Link } from 'react-router-dom';
import './PlatformSection.css';

const PlatformSection = () => {
  return (
    <section className="platform-section">
      <div className="platform-section-container">
        <div className="platform-content">
          <div className="platform-badge">Our platform</div>
          <h2 className="platform-title">
            <strong>Contentstack Edge</strong> combines the power of a headless CMS with real-time customer analytics to improve the way you understand your audiences and deliver content to them. It's your brand at its best: faster, smarter and always personal.
          </h2>
          <div className="platform-cta">
            <Link to="/platform" className="btn-primary">
              Explore our platform
            </Link>
            <Link to="/try-for-free" className="btn-secondary">
              Try for free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

