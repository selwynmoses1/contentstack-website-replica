import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPlatformSection } from '../services/contentstack';
import './PlatformSection.css';

const PlatformSection = () => {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const data = await getPlatformSection();
        setSection(data);
      } catch (error) {
        console.error('Error loading platform section:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSection();
  }, []);

  if (loading || !section) {
    return null;
  }

  return (
    <section className="platform-section">
      <div className="platform-section-container">
        <div className="platform-content">
          <div className="platform-badge">{section.badgeText || 'Our platform'}</div>
          <h2 className="platform-title">
            {section.description ? (
              <div dangerouslySetInnerHTML={{ __html: section.description }} />
            ) : (
              <>
                <strong>Contentstack Edge</strong> combines the power of a headless CMS with real-time customer analytics to improve the way you understand your audiences and deliver content to them. It's your brand at its best: faster, smarter and always personal.
              </>
            )}
          </h2>
          <div className="platform-cta">
            {section.primaryCta && (
              <Link to={section.primaryCta.link || '/platform'} className="btn-primary">
                {section.primaryCta.text || 'Explore our platform'}
              </Link>
            )}
            {section.secondaryCta && (
              <Link to={section.secondaryCta.link || '/try-for-free'} className="btn-secondary">
                {section.secondaryCta.text || 'Try for free'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

