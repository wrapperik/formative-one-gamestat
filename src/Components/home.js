import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { GlobalStateContext } from '../Context/GlobalStateContext'; 
import Searchbar from './searchbar';



function Home() {
  const { setSelectedGame } = useContext(GlobalStateContext); 
  const navigate = useNavigate(); 
  const handleGameSelect = (game) => {
    setSelectedGame(game); 
    navigate('/timeline'); 
  };

  return (
    <div className="searchContainer">
      <div className="text-center mb-16 animate-fadeIn">
        <img src="gs-logo.png" alt="GameStat Logo" className="mx-auto mb-12" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] tracking-tight">Discover Your Next Game</h1>
        <p className="text-[#8b9bb4] text-xl md:text-2xl mb-16 font-light">Search thousands of games and explore detailed analytics</p>
      </div>
      <Searchbar onGameSelect={handleGameSelect} /> 
    </div>
  );
}

export default Home;