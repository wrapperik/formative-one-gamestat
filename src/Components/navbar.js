import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`nav-wrapper ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" exact onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/compare" onClick={toggleMenu}>Compare</NavLink>
          </li>
          <li>
            <NavLink to="/timeline" onClick={toggleMenu}>Timeline</NavLink>
          </li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleMenu}>
        {menuOpen ? 'X' : 'O'}
      </button>
    </>
  );
}

export default Navbar;