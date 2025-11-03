import React, { useEffect, useRef, useState } from 'react';
import { getCompanyLogos } from '../services/contentstack';
import './CompanyLogos.css';

const CompanyLogos = () => {
  const logosRef = useRef(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const data = await getCompanyLogos();
        if (data && data.length > 0) {
          // Use full logo objects with companyName and logoUrl
          setLogos(data);
        } else {
          // Fallback to default logos if no data from Contentstack
          setLogos([
            'ASICS', 'Mattel', 'Walmart', 'Top Golf Callway', 'Steve Madden',
            'MongoDB', 'Alaska Airlines', 'bol', 'callaway', 'crocs',
            'glassdoor', 'icelandair', 'livenation', 'mondelez', 'mitsubishi electrics'
          ]);
        }
      } catch (error) {
        console.error('Error loading company logos:', error);
        // Fallback to default logos on error
        setLogos([
          'ASICS', 'Mattel', 'Walmart', 'Top Golf Callway', 'Steve Madden',
          'MongoDB', 'Alaska Airlines', 'bol', 'callaway', 'crocs',
          'glassdoor', 'icelandair', 'livenation', 'mondelez', 'mitsubishi electrics'
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  useEffect(() => {
    if (loading || logos.length === 0) return;

    const logosContainer = logosRef.current;
    if (!logosContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= logosContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      logosContainer.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [loading, logos.length]);

  if (loading || logos.length === 0) {
    return null;
  }

  return (
    <section className="company-logos">
      <div className="company-logos-container">
        <div className="company-logos-track" ref={logosRef}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="company-logo">
              {typeof logo === 'string' ? (
                <div className="company-logo-placeholder">
                  {logo}
                </div>
              ) : (
                logo.logoUrl ? (
                  <img src={logo.logoUrl} alt={logo.companyName || 'Company logo'} />
                ) : (
                  <div className="company-logo-placeholder">
                    {logo.companyName}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;

