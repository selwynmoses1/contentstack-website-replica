import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Footer from '../components/Footer';
import './Platform.css';

const Platform = () => {
  const features = [
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
    },
    {
      title: 'Headless content management',
      description: "Bring flexibility, security and reliability to your content management with a system that's API-first and native to the cloud.",
      bullets: [
        'Make edits visually without code',
        'Navigate content changes chronologically',
        'Drag and drop components for simple building'
      ],
      link: '/platforms/headless-cms',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Real-time data and insights',
      description: 'Understand your customers to a greater level of precision and adapt in real time based on their behaviors.',
      bullets: [
        'Build dynamic profiles from multiple sources',
        'Segment audiences automatically',
        'Gain insights that help you make better decisions'
      ],
      link: '/platforms/real-time-cdp',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Front-end hosting',
      description: 'Bring your content to life quickly and painlessly, on your terms, with MACH-compliant front-end hosting.',
      bullets: [
        'Work with your choice of tools and frameworks',
        'Connect in just a few clicks',
        'Run functions in the cloud or at the edge'
      ],
      link: '/platforms/launch',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Agents & Automations',
      description: 'Leverage AI and powerful in-platform Agents across to automate and scale your content production.',
      bullets: [
        'Author on-brand content with LLMs',
        'Build workflows that automate repetitive tasks',
        'Generate reports and summaries for your team'
      ],
      link: '/platforms/ai',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  const roles = [
    {
      title: 'Business users',
      description: 'Uncover new efficiencies in your workflows so you do better work, faster.',
      link: '/roles/business'
    },
    {
      title: 'Developers & IT',
      description: 'Break free from the monolith. Build how you want, with the tools you want.',
      link: '/roles/developers'
    },
    {
      title: 'Digital leaders',
      description: 'Empower your teams to do better work and unlock the full potential of your brand, at any scale.',
      link: '/roles/leaders'
    }
  ];

  const customerStories = [
    {
      company: 'Burberry',
      metric: '80%',
      metricLabel: 'Faster content publishing',
      description: 'Read the full story',
      link: '/case-studies/burberry'
    },
    {
      company: 'Air France-KLM',
      description: 'Air France-KLM streamlines content operations and omnichannel strategy on Contentstack',
      link: '/case-studies/air-france-klm'
    },
    {
      company: 'Land-O-Lakes',
      metric: '38%',
      metricLabel: 'Conversion rate',
      description: 'Read the full story',
      link: '/case-studies/land-o-lakes'
    }
  ];

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
                style={{ background: feature.gradient }}
              >
                <div className="platform-feature-icon-content">
                  {feature.title.charAt(0)}
                </div>
              </div>
              <h2 className="platform-feature-title">{feature.title}</h2>
              <p className="platform-feature-description">{feature.description}</p>
              <ul className="platform-feature-bullets">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              <Link to={feature.link} className="platform-feature-link">
                Learn More →
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
                <Link to={role.link} className="platform-role-link">
                  Learn more →
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
            {customerStories.map((story, index) => (
              <div key={index} className="platform-customer-card">
                {story.metric && (
                  <div className="platform-customer-metric">
                    <span className="platform-customer-metric-value">{story.metric}</span>
                    <span className="platform-customer-metric-label">{story.metricLabel}</span>
                  </div>
                )}
                <h3 className="platform-customer-company">{story.company}</h3>
                <p className="platform-customer-description">{story.description}</p>
                <Link to={story.link} className="platform-customer-link">
                  Read the full story →
                </Link>
              </div>
            ))}
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
          <h2 className="platform-cta-title">Ready to reimagine possible?</h2>
          <p className="platform-cta-description">
            Learn more about Contentstack Edge, the adaptive experience platform that powers real-time, omnichannel personalization.
          </p>
          <Link to="/request-demo" className="btn-primary">
            Request a demo
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Platform;

