import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faClock, faBars, faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: faHome },
    { path: '/compare', label: 'Compare', icon: faChartBar },
    { path: '/timeline', label: 'Timeline', icon: faClock }
  ];

  return (
    <>
      <nav className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>
        <div className="nav-brand">
          <FontAwesomeIcon icon={faGamepad} className="brand-icon" />
          <h2 className="brand-title">GameStat</h2>
        </div>
        
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-footer">
          <p className="nav-footer-text">Game Analytics Platform</p>
        </div>
      </nav>

      <button className="toggle-button" onClick={toggleMenu} aria-label="Toggle menu">
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;