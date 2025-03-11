<<<<<<< Updated upstream
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
=======
import React from 'react';
import '../Styles/navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
      <><nav id="navbar-example3" class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
      <a class="navbar-brand" href="#">Navbar</a>
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">Item 1</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link" href="#item-3">Item 3</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
          <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
        </nav>
      </nav>
    </nav>
    
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
      <h4 id="item-1">Item 1</h4>
      <p>...</p>
      <h5 id="item-1-1">Item 1-1</h5>
      <p>...</p>
      <h5 id="item-1-2">Item 1-2</h5>
      <p>...</p>
      <h4 id="item-2">Item 2</h4>
      <p>...</p>
      <h4 id="item-3">Item 3</h4>
      <p>...</p>
      <h5 id="item-3-1">Item 3-1</h5>
      <p>...</p>
      <h5 id="item-3-2">Item 3-2</h5>
      <p>...</p>
    </div></>
    );
};
>>>>>>> Stashed changes

export default Navbar;