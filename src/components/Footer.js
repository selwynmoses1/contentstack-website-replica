import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Solution Center', href: '/solutions' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Changelog', href: '/docs/changelog' },
        { name: 'Developers & IT', href: '/roles/developers' },
        { name: 'Business users', href: '/roles/business' },
        { name: 'Digital leaders', href: '/roles/leaders' },
        { name: 'Developer Fast Track', href: '/try-for-free' },
        { name: 'Plans & Pricing', href: '/pricing' },
        { name: 'ROI calculator', href: '/roi-calculator' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Travel and tourism', href: '/solutions/travel-tourism' },
        { name: 'Financial services', href: '/solutions/financial-services' },
        { name: 'Technology', href: '/solutions/technology-industry' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'E-commerce', href: '/solutions/ecommerce' },
        { name: 'Localization', href: '/solutions/localization' },
        { name: 'Personalization', href: '/solutions/personalization' },
        { name: 'Portals and knowledge bases', href: '/solutions/portals-knowledge-bases' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Academy', href: '/academy' },
        { name: 'Docs', href: '/docs' },
        { name: 'Product updates', href: '/platform-updates' },
        { name: 'Blog', href: '/blog' },
        { name: 'Insights and analyst reports', href: '/resources/report' },
        { name: 'Webinars', href: '/resources/webinar' },
        { name: 'Podcasts', href: '/podcasts/people-changing-enterprises' },
        { name: 'Glossary', href: '/glossary' },
        { name: 'AI Prompt Library', href: '/ai-prompts' },
        { name: 'Community', href: '/community' },
        { name: 'Headless CMS', href: '/platforms/headless-cms' },
        { name: 'Composable DXP', href: '/platform' },
        { name: 'Personalization', href: '/platforms/omnichannel-personalization' },
        { name: 'CDP', href: '/platforms/real-time-cdp' }
      ]
    },
    {
      title: 'Customers',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Customer Care', href: '/customer-care' },
        { name: 'Contentstack Experience Awards', href: '/customers/experience-awards' },
        { name: 'Customer support', href: '/customers/support' }
      ]
    },
    {
      title: 'Partners',
      links: [
        { name: 'Overview', href: '/partners' },
        { name: 'Find a partner', href: '/partners/solutions' },
        { name: 'Login', href: 'https://contentstack.channeltivity.com/Login' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/about' },
        { name: 'News', href: '/company/news' },
        { name: 'Customer support portal', href: '/support' },
        { name: 'Contact', href: '/company/contact-us' }
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'Facebook', href: 'https://www.facebook.com/contentstack', external: true },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/contentstack/', external: true },
        { name: 'Instagram', href: 'https://www.instagram.com/contentstack/', external: true },
        { name: 'Github', href: 'https://github.com/contentstack', external: true },
        { name: 'Youtube', href: 'https://www.youtube.com/contentstack', external: true },
        { name: 'Discord', href: 'https://discord.com/invite/NyWJ68gdDw', external: true },
        { name: 'X', href: 'https://x.com/contentstack', external: true }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-column">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="footer-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="footer-link"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link to="/platform" className="footer-brand">
              Full DXP by Contentstack
            </Link>
            <div className="footer-legal">
              <Link to="/legal" className="footer-legal-link">Legal</Link>
              <Link to="/legal/terms-of-service" className="footer-legal-link">Terms</Link>
              <Link to="/legal/privacy" className="footer-legal-link">Privacy</Link>
              <button className="footer-legal-link">Cookies Settings</button>
            </div>
          </div>
          <div className="footer-copyright">
            Copyright © 2025 Contentstack Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

