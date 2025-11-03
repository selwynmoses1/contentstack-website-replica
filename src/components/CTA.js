import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCTASections } from '../services/contentstack';
import './CTA.css';

const CTA = () => {
  const [ctaSections, setCtaSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCTAs = async () => {
      try {
        const data = await getCTASections('home');
        setCtaSections(data);
      } catch (error) {
        console.error('Error loading CTA sections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCTAs();
  }, []);

  if (loading || ctaSections.length === 0) {
    // Fallback to default CTA if no data from Contentstack
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
  }

  return (
    <section className="cta-section">
      <div className="cta-container">
        {ctaSections.map((cta, index) => (
          <div key={index} className={`cta-${cta.sectionLocation === 'home' ? 'content' : 'main'}`}>
            {cta.title && <h2 className="cta-title">{cta.title}</h2>}
            {cta.description && (
              <p className={cta.sectionLocation === 'home' ? 'cta-text' : 'cta-description'}>
                {cta.description}
              </p>
            )}
            <div className="cta-buttons">
              {cta.primaryCta && (
                <Link to={cta.primaryCta.link || '#'} className="btn-primary">
                  {cta.primaryCta.text}
                </Link>
              )}
              {cta.secondaryCta && (
                <Link to={cta.secondaryCta.link || '#'} className="btn-secondary">
                  {cta.secondaryCta.text}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CTA;

