import React, { useState } from 'react';

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
      onGameSelect(game); 
    }
    setResults([]); 
  };

  return (
    <div className="relative">
      <div className="group relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 fill-gray-400 transition-all group-hover:fill-white" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search for your favourite game..."
          type="search"
          className="w-full h-12 pl-12 pr-4 rounded bg-[#1b2838] !border !border-[#3c4f62]/20 text-white placeholder-[#8b9bb4] outline-none transition-all duration-200 focus:!border-[#66c0f4]/60 focus:bg-[#1e2329] focus:shadow-[0_0_10px_rgba(102,192,244,0.2)]"
          value={query}
          onChange={handleSearch}
        />
      </div>
      {results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 max-h-96 overflow-y-auto bg-[#1b2838] !border !border-[#3c4f62]/20 rounded shadow-steam">
          {results.map((game) => (
            <div key={game.id} className="flex items-center gap-4 p-3 cursor-pointer hover:bg-[#2a3f5f]/50 transition-all duration-200 !border-b !border-[#3c4f62]/30 last:border-b-0" onClick={() => handleGameClick(game)}>
              <img src={game.background_image} alt={game.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-white">{game.name}</h3>
                <p className="text-sm text-[#8b9bb4]">Released: {game.released}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchbar;