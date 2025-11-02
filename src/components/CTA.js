import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <p className="cta-text">
            <strong>The adaptive digital experience era is here.</strong> Empowering better, more creative work, and moments that matter to your audience.
          </p>
          <div className="cta-buttons">
            <Link to="/platforms/omnichannel-personalization" className="btn-secondary">
              Begin the journey
            </Link>
            <Link to="/try-for-free" className="btn-primary">
              Try for free
            </Link>
          </div>
        </div>

        <div className="cta-main">
          <h2 className="cta-title">Reimagine possible</h2>
          <p className="cta-description">
            Because with Contentstack, it is possible. And we'll help you get there.
          </p>
          <Link to="/request-demo" className="btn-primary">
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

