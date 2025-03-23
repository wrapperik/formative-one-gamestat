import React, { useState } from 'react';
import '../Styles/searchbar.css';

function Searchbar({ onGameSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.length > 2) {
      const response = await fetch(`https://api.rawg.io/api/games?key=d9acd6ae3c6941cb9d26d2e233eb26c2&search=${e.target.value}`);
      const data = await response.json();
      setResults(data.results);
    } else {
      setResults([]);
    }
  };

  const handleGameClick = (game) => {
    if (onGameSelect) {
      onGameSelect(game); // Use the passed prop to handle game selection
    }
    setResults([]); // Clear the results to hide the dropdown

  };

  return (
    <div>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search for your favourite game..."
          type="search"
          className="input"
          value={query}
          onChange={handleSearch}
        />
      </div>
      {results.length > 0 && (
        <div className="results">
          {results.map((game) => (
            <div key={game.id} className="result-item" onClick={() => handleGameClick(game)}>
              <img src={game.background_image} alt={game.name} className="result-image" />
              <div className="result-info">
                <h3>{game.name}</h3>
                <p>Released: {game.released}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;