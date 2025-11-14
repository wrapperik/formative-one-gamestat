import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import GameRatingChart from './GameRatingChart';
import PlatformPieChart from './platformPieChart';
import Searchbar from './searchbar';

function Compare() {
  const { selectedGame1, setSelectedGame1, selectedGame2, setSelectedGame2 } = useContext(GlobalStateContext); 
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  
  const handleGameSelect1 = (game) => {
    setSelectedGame1(game);
    setCurrentIndex1(0);
  };

  const handleGameSelect2 = (game) => {
    setSelectedGame2(game);
    setCurrentIndex2(0);
  };

  const nextImage1 = () => {
    if (selectedGame1 && selectedGame1.short_screenshots) {
      setCurrentIndex1((prev) => (prev + 1) % selectedGame1.short_screenshots.length);
    }
  };

  const prevImage1 = () => {
    if (selectedGame1 && selectedGame1.short_screenshots) {
      setCurrentIndex1((prev) => (prev - 1 + selectedGame1.short_screenshots.length) % selectedGame1.short_screenshots.length);
    }
  };

  const nextImage2 = () => {
    if (selectedGame2 && selectedGame2.short_screenshots) {
      setCurrentIndex2((prev) => (prev + 1) % selectedGame2.short_screenshots.length);
    }
  };

  const prevImage2 = () => {
    if (selectedGame2 && selectedGame2.short_screenshots) {
      setCurrentIndex2((prev) => (prev - 1 + selectedGame2.short_screenshots.length) % selectedGame2.short_screenshots.length);
    }
  };

  return (
    <div className="min-h-screen pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 md:pt-12 font-montserrat">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">Game Comparison</h1>
        <p className="text-[#8b9bb4] text-center text-sm md:text-base">Compare your favorite games side by side</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* First Game Comparison Card */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white rounded border border-[#3c4f62]/20 shadow-steam hover:shadow-steam-hover hover:border-[#66c0f4]/30 transition-all duration-300 overflow-hidden">
            <div className="p-4 md:p-6 space-y-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#8b9bb4] mb-2">Game 1</h3>
                <Searchbar onGameSelect={handleGameSelect1} />
              </div>
              {selectedGame1 ? (
                <div className="space-y-3 animate-fadeIn">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedGame1.name}</h2>
                    <p className="text-sm text-[#8b9bb4]">Released: {selectedGame1.released}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#2a3f5f]/50 text-[#66c0f4] rounded text-sm font-semibold !border !border-[#66c0f4]/15">⭐ {selectedGame1.rating}/5</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b9bb4] mb-1 uppercase font-semibold">Platforms</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedGame1.platforms.slice(0, 4).map((p, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#1e2329] !border !border-[#3c4f62]/20 rounded text-xs text-[#8b9bb4]">{p.platform.name}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b9bb4] mb-1 uppercase font-semibold">Genres</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedGame1.genres.map((g, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#2a3f5f]/40 text-[#66c0f4] rounded text-xs !border !border-[#66c0f4]/15">{g.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">🎮</div>
                  <p className="text-[#8b9bb4]">Search for a game to compare</p>
                </div>
              )}
            </div>
          </div>
          {selectedGame1 && (
          <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] rounded border border-[#3c4f62]/20 shadow-steam overflow-hidden">
            <div className="p-4 md:p-6">
              <h5 className="text-lg font-semibold mb-4 text-white">Gameplay Screenshots</h5>
              {selectedGame1.short_screenshots ? (
                <div className="relative rounded overflow-hidden group">
                  <img 
                    src={selectedGame1.short_screenshots[currentIndex1].image} 
                    className="w-full aspect-video object-cover" 
                    alt={`Screenshot ${currentIndex1 + 1}`} 
                  />
                  {selectedGame1.short_screenshots.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage1}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="Previous"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage1}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="Next"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {currentIndex1 + 1} / {selectedGame1.short_screenshots.length}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#8b9bb4]">No screenshots available</p>
                </div>
              )}
            </div>
          </div>
          )}
        </div>

        {/* Second Game Comparison Card */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white rounded border border-[#3c4f62]/20 shadow-steam hover:shadow-steam-hover hover:border-[#66c0f4]/30 transition-all duration-300 overflow-hidden">
            <div className="p-4 md:p-6 space-y-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-[#8b9bb4] mb-2">Game 2</h3>
                <Searchbar onGameSelect={handleGameSelect2} />
              </div>
              {selectedGame2 ? (
                <div className="space-y-3 animate-fadeIn">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1">{selectedGame2.name}</h2>
                    <p className="text-sm text-[#8b9bb4]">Released: {selectedGame2.released}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#2a3f5f]/50 text-[#66c0f4] rounded text-sm font-semibold !border !border-[#66c0f4]/15">⭐ {selectedGame2.rating}/5</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b9bb4] mb-1 uppercase font-semibold">Platforms</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedGame2.platforms.slice(0, 4).map((p, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#1e2329] !border !border-[#3c4f62]/20 rounded text-xs text-[#8b9bb4]">{p.platform.name}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#8b9bb4] mb-1 uppercase font-semibold">Genres</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedGame2.genres.map((g, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#2a3f5f]/40 text-[#66c0f4] rounded text-xs !border !border-[#66c0f4]/15">{g.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">🎮</div>
                  <p className="text-[#8b9bb4]">Search for a game to compare</p>
                </div>
              )}
            </div>
          </div>
          {selectedGame2 && (
          <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] rounded border border-[#3c4f62]/20 shadow-steam overflow-hidden">
            <div className="p-4 md:p-6">
              <h5 className="text-lg font-semibold mb-4 text-white">Gameplay Screenshots</h5>
              {selectedGame2.short_screenshots ? (
                <div className="relative rounded overflow-hidden group">
                  <img 
                    src={selectedGame2.short_screenshots[currentIndex2].image} 
                    className="w-full aspect-video object-cover" 
                    alt={`Screenshot ${currentIndex2 + 1}`} 
                  />
                  {selectedGame2.short_screenshots.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage2}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="Previous"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button 
                        onClick={nextImage2}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        aria-label="Next"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-2 py-1 rounded">
                        {currentIndex2 + 1} / {selectedGame2.short_screenshots.length}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[#8b9bb4]">No screenshots available</p>
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </div>

      {(selectedGame1 || selectedGame2) && (
      <>
      <div className="mt-6 md:mt-8">
        <GameRatingChart 
          game1={selectedGame1 ? selectedGame1.name : 'Game 1'} 
          game2={selectedGame2 ? selectedGame2.name : 'Game 2'} 
          rating1={selectedGame1 ? selectedGame1.rating : 0} 
          rating2={selectedGame2 ? selectedGame2.rating : 0} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
        {selectedGame1 && <PlatformPieChart platforms={selectedGame1.platforms} />}
        {selectedGame2 && <PlatformPieChart platforms={selectedGame2.platforms} />}
      </div>
      </>
      )}
    </div>
  );
}

export default Compare;
