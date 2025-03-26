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
      <Searchbar onGameSelect={handleGameSelect} /> 
    </div>
  );
}

export default Home;