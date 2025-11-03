import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopBanner, onEntryChange } from '../services/contentstack';
import './TopBanner.css';

const TopBanner = () => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getTopBanner();
        setBanner(data);
      } catch (error) {
        console.error('Error loading top banner:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanner();
    // Subscribe to Live Preview updates
    onEntryChange(fetchBanner);
  }, []);

  if (loading || !banner) {
    return null;
  }

  return (
    <div className="top-banner">
      <Link to={banner.linkUrl || '#'} className="top-banner-link">
        <span>{banner.title}</span>
        <span className="arrow">→</span>
      </Link>
    </div>
  );
};

export default TopBanner;

