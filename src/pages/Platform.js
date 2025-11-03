import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Footer from '../components/Footer';
import { getPlatformFeatures, getRoles, getCustomerStories, getCTASections, onEntryChange } from '../services/contentstack';
import './Platform.css';

const Platform = () => {
  const [features, setFeatures] = useState([]);
  const [roles, setRoles] = useState([]);
  const [customerStories, setCustomerStories] = useState([]);
  const [ctaSections, setCtaSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featuresData, rolesData, storiesData, ctaData] = await Promise.all([
          getPlatformFeatures(),
          getRoles(),
          getCustomerStories(),
          getCTASections('platform')
        ]);

        if (featuresData && featuresData.length > 0) {
          setFeatures(featuresData);
        } else {
          // Fallback to default features
          setFeatures([
            {
              title: 'Omnichannel personalization',
              description: 'Deliver content that dynamically adapts to your visitors, across every channel.',
              bullets: [
                'Use first-party data in real time',
                'Experiment with A/B/n testing to find what works',
                'Orchestrate audience journeys across all channels'
              ],
              link: '/platforms/omnichannel-personalization',
              gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }
          ]);
        }

        if (rolesData && rolesData.length > 0) {
          setRoles(rolesData);
        } else {
          // Fallback to default roles
          setRoles([
            {
              title: 'Business users',
              description: 'Uncover new efficiencies in your workflows so you do better work, faster.',
              link: '/roles/business'
            }
          ]);
        }

        if (storiesData && storiesData.length > 0) {
          // Transform stories to match component structure
          setCustomerStories(storiesData.map(story => ({
            company: story.companyName || story.title,
            metric: story.metricValue,
            metricLabel: story.metricLabel,
            description: story.description || 'Read the full story',
            link: story.link
          })));
        } else {
          // Fallback to default stories
          setCustomerStories([
            {
              company: 'Burberry',
              metric: '80%',
              metricLabel: 'Faster content publishing',
              description: 'Read the full story',
              link: '/case-studies/burberry'
            }
          ]);
        }

        setCtaSections(ctaData || []);
      } catch (error) {
        console.error('Error loading platform data:', error);
        // Set fallback data on error
        setFeatures([{
          title: 'Omnichannel personalization',
          description: 'Deliver content that dynamically adapts to your visitors, across every channel.',
          bullets: [],
          link: '/platforms/omnichannel-personalization',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }]);
        setRoles([{
          title: 'Business users',
          description: 'Uncover new efficiencies in your workflows so you do better work, faster.',
          link: '/roles/business'
        }]);
        setCustomerStories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Subscribe to Live Preview updates
    onEntryChange(fetchData);
  }, []);

  return (
    <>
      <TopBanner />
      <Header />
      
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">→</span>
          <span className="breadcrumb-current">Platform overview</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="platform-hero">
        <div className="platform-hero-container">
          <h1 className="platform-hero-title">
            The digital experience platform for adaptive real-time personalization at speed and scale
          </h1>
          <Link to="/try-for-free" className="btn-primary platform-cta">
            Try for free
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="platform-features">
          <div className="platform-features-container">
          {features.map((feature, index) => (
            <div key={index} className="platform-feature-card">
              <div 
                className="platform-feature-icon" 
                style={{ background: feature.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                <div className="platform-feature-icon-content">
                  {feature.icon ? (
                    <img src={feature.icon} alt={feature.title} />
                  ) : (
                    feature.title.charAt(0)
                  )}
                </div>
              </div>
              <h2 className="platform-feature-title">{feature.title}</h2>
              <p className="platform-feature-description">{feature.description}</p>
              {feature.bullets && feature.bullets.length > 0 && (
                <ul className="platform-feature-bullets">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
              <Link to={feature.link || '#'} className="platform-feature-link">
                {feature.cta || 'Learn More'} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Built for Everyone Section */}
      <section className="platform-roles">
        <div className="platform-roles-container">
          <h2 className="platform-roles-title">Built for everyone in your organization</h2>
          <div className="platform-roles-grid">
            {roles.map((role, index) => (
              <div key={index} className="platform-role-card">
                <h3 className="platform-role-title">{role.title}</h3>
                <p className="platform-role-description">{role.description}</p>
                <Link to={role.link || '#'} className="platform-role-link">
                  {role.cta || 'Learn more'} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="platform-customers">
        <div className="platform-customers-container">
          <h2 className="platform-customers-title">
            These companies run on Contentstack Edge
          </h2>
          <div className="platform-customers-grid">
            {customerStories.length > 0 ? (
              customerStories.map((story, index) => (
                <div key={index} className="platform-customer-card">
                  {story.metric && (
                    <div className="platform-customer-metric">
                      <span className="platform-customer-metric-value">{story.metric}</span>
                      {story.metricLabel && (
                        <span className="platform-customer-metric-label">{story.metricLabel}</span>
                      )}
                    </div>
                  )}
                  <h3 className="platform-customer-company">{story.company}</h3>
                  {story.description && (
                    <p className="platform-customer-description">{story.description}</p>
                  )}
                  {story.link && (
                    <Link to={story.link} className="platform-customer-link">
                      Read the full story →
                    </Link>
                  )}
                </div>
              ))
            ) : (
              <div className="platform-customers-empty">Loading customer stories...</div>
            )}
          </div>
        </div>
      </section>

      {/* Why Legacy Platforms Section */}
      <section className="platform-legacy">
        <div className="platform-legacy-container">
          <div className="platform-legacy-content">
            <h2 className="platform-legacy-title">Why legacy platforms hold you back</h2>
            <p className="platform-legacy-description">
              See the advantages of moving toward a future-ready, composable DXP.
            </p>
            <Link to="/comparison" className="btn-secondary">
              See the comparison
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="platform-cta-section">
        <div className="platform-cta-container">
          {ctaSections.length > 0 ? (
            ctaSections.map((cta, index) => (
              <div key={index}>
                {cta.title && <h2 className="platform-cta-title">{cta.title}</h2>}
                {cta.description && (
                  <p className="platform-cta-description">{cta.description}</p>
                )}
                <div className="platform-cta-buttons">
                  {cta.primaryCta && (
                    <Link to={cta.primaryCta.link || '/request-demo'} className="btn-primary">
                      {cta.primaryCta.text || 'Request a demo'}
                    </Link>
                  )}
                  {cta.secondaryCta && (
                    <Link to={cta.secondaryCta.link || '#'} className="btn-secondary">
                      {cta.secondaryCta.text}
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <>
              <h2 className="platform-cta-title">Ready to reimagine possible?</h2>
              <p className="platform-cta-description">
                Learn more about Contentstack Edge, the adaptive experience platform that powers real-time, omnichannel personalization.
              </p>
              <Link to="/request-demo" className="btn-primary">
                Request a demo
              </Link>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Platform;

