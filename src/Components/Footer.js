import React, { useState } from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const [isFooterExpanded, setIsFooterExpanded] = useState(false);

  const toggleFooter = () => {
    setIsFooterExpanded(!isFooterExpanded);
  };

  return (
    <div className={`footer ${isFooterExpanded ? 'footer-expanded' : ''}`}>
      <div className="footer-header" onClick={toggleFooter}>
        <span className="about-text">About</span>
      </div>
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <p>The ultimate platform for gamers and developers to explore, compare, and analyse game data like never before. Whether you’re a casual player searching for your next favourite title or a developer studying industry trends, we provide the tools you need to dive deep into the gaming world.</p>
          </div>
          <div className="footer-column">
            <p>With our powerful comparison features, you can stack games side by side—breaking down genres, reviews, and available platforms in one place. Our extensive database keeps you updated with the latest releases, industry insights, and historical data to help you make informed decisions.</p>
          </div>
          <div className="footer-column">
            <p>Join a growing community of gaming enthusiasts and professionals who are passionate about understanding and shaping the future of interactive entertainment. Start exploring today!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;