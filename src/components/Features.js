import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFeatures } from '../services/contentstack';
import './Features.css';

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const data = await getFeatures();
        if (data && data.length > 0) {
          setFeatures(data);
        } else {
          // Fallback to default features if no data from Contentstack
          setFeatures([
            {
              title: 'A headless CMS built for flexibility',
              description: 'Maintain complete control of your technology with an API-first, cloud-based headless CMS.',
              link: '/platforms/headless-cms',
              cta: 'Learn more about Headless CMS'
            },
            {
              title: 'Highly personalized',
              description: "Leverage data and automation so you're delivering the right message in the right place and at the right time.",
              link: '/platforms/omnichannel-personalization',
              cta: 'Learn more about personalization'
            },
            {
              title: 'Powerful customer analytics',
              description: 'All of your customer data, unified and ready for action, across every channel and audience.',
              link: '/platforms/real-time-cdp',
              cta: 'Learn more about real time data'
            },
            {
              title: 'Effortless front-end hosting',
              description: 'Fully integrated. Fully automated. MACH-compliant. This is front-end hosting that works for you, not against you.',
              link: '/platforms/launch',
              cta: 'Learn more about launch'
            },
            {
              title: 'Intelligent agents, built for action',
              description: 'Deploy agents that combine reasoning, brand context, and tools to accelerate your work where it matters most.',
              link: '/platforms/ai',
              cta: 'Learn more about agents'
            }
          ]);
        }
      } catch (error) {
        console.error('Error loading features:', error);
        // Fallback to default features on error
        setFeatures([
          {
            title: 'A headless CMS built for flexibility',
            description: 'Maintain complete control of your technology with an API-first, cloud-based headless CMS.',
            link: '/platforms/headless-cms',
            cta: 'Learn more about Headless CMS'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <section className="features">
        <div className="features-container">
          <div className="features-loading">Loading features...</div>
        </div>
      </section>
    );
  }

  if (features.length === 0) {
    return null;
  }

  // Find featured feature (first one or marked as featured)
  const featuredFeature = features.find(f => f.isFeatured) || features[0];
  const regularFeatures = features.filter(f => f !== featuredFeature);

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h3 className="feature-card-title">{featuredFeature.title}</h3>
          <p className="feature-card-description">{featuredFeature.description}</p>
          <Link to={featuredFeature.link || '#'} className="feature-card-link">
            {featuredFeature.cta}
          </Link>
        </div>

        <div className="features-grid">
          {regularFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
              <Link to={feature.link || '#'} className="feature-card-link">
                {feature.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

