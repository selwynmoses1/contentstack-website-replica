import React, { useEffect, useRef } from 'react';
import './CompanyLogos.css';

const CompanyLogos = () => {
  const logosRef = useRef(null);
  const logos = [
    'ASICS', 'Mattel', 'Walmart', 'Top Golf Callway', 'Steve Madden',
    'MongoDB', 'Alaska Airlines', 'bol', 'callaway', 'crocs',
    'glassdoor', 'icelandair', 'livenation', 'mondelez', 'mitsubishi electrics'
  ];

  useEffect(() => {
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
  }, []);

  return (
    <section className="company-logos">
      <div className="company-logos-container">
        <div className="company-logos-track" ref={logosRef}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="company-logo">
              <div className="company-logo-placeholder">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;

