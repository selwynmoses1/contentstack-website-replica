import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {
  const features = [
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
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h3 className="feature-card-title">A headless CMS built for flexibility</h3>
          <p className="feature-card-description">
            Maintain complete control of your technology with an API-first, cloud-based headless CMS.
          </p>
          <Link to="/platforms/headless-cms" className="feature-card-link">
            Learn more about Headless CMS
          </Link>
        </div>

        <div className="features-grid">
          {features.slice(1).map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-description">{feature.description}</p>
              <Link to={feature.link} className="feature-card-link">
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

