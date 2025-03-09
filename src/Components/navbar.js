import React, { useState } from 'react';
import '../Styles/navbar.css';

function Navbar() {
  const [activePage, setActivePage] = useState('home');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="progress-bar">
          <div
            className="progress-ball"
            style={{
              top: activePage === 'home' ? '20px' : activePage === 'compare' ? '61px' : '102px',
            }}
          ></div>
        </div>
        <div className="nav-items">
          <h1><a onClick={() => handleNavClick('home')}>home</a></h1>
          <h2><a onClick={() => handleNavClick('compare')}>compare</a></h2>
          <h2><a onClick={() => handleNavClick('timeline')}>timeline</a></h2>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;