import React from 'react';
import { Link } from 'react-router-dom';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <Link to="/fall-product-update" className="top-banner-link">
        <span>See what's new at our Fall Product Update — Live November 6</span>
        <span className="arrow">→</span>
      </Link>
    </div>
  );
};

export default TopBanner;

