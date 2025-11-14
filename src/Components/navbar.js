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
      <nav className={`fixed left-0 top-0 h-screen w-[250px] bg-primary-dark/60 backdrop-blur-xl border-r border-white/10 shadow-[4px_0_30px_rgba(0,0,0,0.3)] flex flex-col py-8 z-[998] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:translate-x-0 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:w-[250px] max-md:w-[280px] max-md:bg-primary-dark/95`}>
        <div className="px-8 mb-12 flex items-center gap-4">
          <FontAwesomeIcon icon={faGamepad} className="text-2xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          <h2 className="text-white text-2xl font-semibold m-0 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">GameStat</h2>
        </div>
        
        <ul className="list-none p-0 m-0 flex-1">
          {navItems.map((item, index) => (
            <li key={index} className="my-2">
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `flex items-center gap-5 px-8 py-4 text-white/80 no-underline text-lg font-medium transition-all duration-300 relative overflow-hidden hover:bg-white/10 hover:text-white hover:pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-white before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100 ${
                    isActive ? 'bg-white/15 text-white font-semibold pl-10 before:scale-y-100' : ''
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
        className="hidden max-md:flex fixed top-6 left-6 w-[50px] h-[50px] rounded-xl bg-primary-dark/80 backdrop-blur-md border border-white/20 text-white text-xl cursor-pointer z-[1001] shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 items-center justify-center hover:bg-primary-dark/95 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] active:translate-y-0"
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {menuOpen && (
        <div 
          className="hidden max-md:block fixed top-0 left-0 w-full h-full bg-black/60 z-[997] backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}

export default Navbar;