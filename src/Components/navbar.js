import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faClock, faBars, faTimes, faGamepad } from '@fortawesome/free-solid-svg-icons';

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
      <nav className={`fixed left-0 top-0 h-screen w-[250px] bg-[#171d25]/95 backdrop-blur-md !border-r !border-[#3c4f62]/15 shadow-[2px_0_10px_rgba(0,0,0,0.5)] flex flex-col py-8 z-[998] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:w-[250px] max-md:w-[280px] max-md:bg-primary-dark/95`}>
        <div className="px-8 mb-12 flex items-center gap-1">
          <img src="/gs-logo.png" alt="GameStat Logo" className="w-14 h-14 drop-shadow-[0_0_8px_rgba(102,192,244,0.4)]" />
          <h2 className="text-white text-2xl font-semibold m-0 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">GameStat</h2>
        </div>
        
        <ul className="list-none p-0 m-0 flex-1">
          {navItems.map((item, index) => (
            <li key={index} className="my-2">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-5 px-8 py-4 text-[#8b9bb4] no-underline text-lg font-medium transition-all duration-200 relative overflow-hidden hover:bg-gradient-to-r hover:from-[#2a3f5f]/40 hover:to-transparent hover:text-white before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[#66c0f4] before:scale-y-0 before:transition-transform before:duration-200 hover:before:scale-y-100 ${
                    isActive ? 'bg-gradient-to-r from-[#2a3f5f]/50 to-transparent text-white font-semibold before:scale-y-100' : ''
                  }`
                }
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl min-w-[24px]" />
                <span className="tracking-wide">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="px-8 mt-auto">
          <p className="text-white/60 text-sm m-0 text-center font-light">Game Analytics Platform</p>
        </div>
      </nav>

        <button 
        className="hidden max-md:flex fixed top-6 left-6 w-[50px] h-[50px] rounded-lg bg-[#1b2838]/90 backdrop-blur-md !border !border-[#3c4f62]/20 text-white text-xl cursor-pointer z-[1001] shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all duration-200 items-center justify-center hover:bg-[#2a3f5f] hover:!border-[#66c0f4]/40 active:translate-y-0"
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>      {menuOpen && (
        <div 
          className="hidden max-md:block fixed top-0 left-0 w-full h-full bg-black/60 z-[997] backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;