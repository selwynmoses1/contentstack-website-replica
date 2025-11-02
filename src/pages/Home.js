import React from 'react';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Hero from '../components/Hero';
import CompanyLogos from '../components/CompanyLogos';
import PlatformSection from '../components/PlatformSection';
import Features from '../components/Features';
import CustomerStories from '../components/CustomerStories';
import Insights from '../components/Insights';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <CompanyLogos />
      <PlatformSection />
      <Features />
      <CustomerStories />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;

