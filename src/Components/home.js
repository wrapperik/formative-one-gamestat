import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { GlobalStateContext } from '../Context/GlobalStateContext'; // Import GlobalStateContext
import Searchbar from './searchbar';

function Home() {
  const { setSelectedGame } = useContext(GlobalStateContext); // Access setSelectedGame from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGameSelect = (game) => {
    setSelectedGame(game); // Set the selected game in global state
    navigate('/timeline'); // Navigate to the Timeline page
  };

  return (
    <div className="searchContainer">
      <Searchbar onGameSelect={handleGameSelect} /> 
    </div>
  );
}

export default Home;