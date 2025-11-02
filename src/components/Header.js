import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Platform', link: '/platform' },
    {
      name: 'Capabilities',
      link: null,
      dropdown: [
        'Headless CMS',
        'Personalization',
        'Customer Analytics',
        'Front-end Hosting',
        'AI Agents'
      ]
    },
    {
      name: 'Resources',
      link: null,
      dropdown: [
        'Academy',
        'Docs',
        'Blog',
        'Case Studies',
        'Webinars'
      ]
    },
    { name: 'Plans', link: '/pricing' },
    { name: 'Partners', link: '/partners' },
    {
      name: 'Company',
      link: null,
      dropdown: [
        'About Us',
        'Careers',
        'News',
        'Contact'
      ]
    }
  ];

  const toggleDropdown = (item) => {
    if (item.dropdown) {
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-top">
          <div className="header-actions">
            <button className="icon-button" aria-label="Search">
              <FiSearch />
            </button>
            <Link to="/academy" className="header-link">Academy</Link>
            <Link to="/docs" className="header-link">Docs</Link>
            <Link to="/login" className="header-link">Login</Link>
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className="logo">
            <div className="logo-icon">CS</div>
            <span className="logo-text">Contentstack</span>
          </Link>

          <ul className="nav-list">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item ${item.dropdown ? 'has-dropdown' : ''} ${
                  activeDropdown === item.name ? 'active' : ''
                }`}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.link ? (
                  <Link to={item.link} className={`nav-link ${location.pathname === item.link ? 'active' : ''}`}>
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className="nav-link"
                      onClick={() => toggleDropdown(item)}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <div className="dropdown-menu">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem}
                            to={`/${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                            className="dropdown-item"
                          >
                            {dropdownItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="header-cta">
            <Link to="/request-demo" className="btn-secondary">
              Talk to Us
            </Link>
            <Link to="/try-for-free" className="btn-primary">
              Start Free
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.name} className="mobile-nav-item">
              {item.link ? (
                <Link
                  to={item.link}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    className="mobile-nav-link"
                    onClick={() => toggleDropdown(item)}
                  >
                    {item.name}
                  </button>
                    {item.dropdown && activeDropdown === item.name && (
                      <ul className="mobile-dropdown">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem}>
                            <Link
                              to={`/${dropdownItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="mobile-dropdown-item"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-cta">
          <Link to="/request-demo" className="btn-secondary" onClick={() => setIsMobileMenuOpen(false)}>
            Talk to Us
          </Link>
          <Link to="/try-for-free" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

