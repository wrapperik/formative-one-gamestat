import React, { useState, useContext } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GameRatingChart from './GameRatingChart';
import PlatformPieChart from './platformPieChart';
import Searchbar from './searchbar';

function Compare() {
  const { selectedGame1, setSelectedGame1, selectedGame2, setSelectedGame2 } = useContext(GlobalStateContext); 
  
  const handleGameSelect1 = (game) => {
    setSelectedGame1(game);
  };

  const handleGameSelect2 = (game) => {
    setSelectedGame2(game);
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen text-left my-12 mx-auto max-w-[calc(100vw-270px)] px-5 pb-24 w-full box-border overflow-x-hidden font-montserrat max-md:my-0 max-md:px-2.5 max-md:max-w-[100vw]">
      <h1 className="text-center my-4 mx-0 p-2.5 text-white">Game Comparison</h1>
      <div className="flex flex-wrap justify-between items-start w-full gap-5 !ml-0 !mr-0 max-w-full box-border">
        {/* First Game Comparison Card */}
        <div className="flex-[1_1_48%] max-w-[48%] max-md:max-w-full">
          <div className="bg-gradient-to-t from-secondary-dark to-black/50 text-white rounded-3xl border border-gray-400/40 p-5 max-h-[400px] min-h-[400px] overflow-auto">
            <div className="p-5">
              <Searchbar onGameSelect={handleGameSelect1} />
              {selectedGame1 ? (
                <>
                  <p><strong>Title:</strong> {selectedGame1.name}</p>
                  <p><strong>Released:</strong> {selectedGame1.released}</p>
                  <p><strong>Rating:</strong> {selectedGame1.rating}</p>
                  <p><strong>Platforms:</strong> {selectedGame1.platforms.map(p => p.platform.name).join(', ')}</p>
                  <p><strong>Genre:</strong> {selectedGame1.genres.map(g => g.name).join(', ')}</p>
                </>
              ) : (
                <p>Select a game to see details.</p>
              )}
            </div>
          </div>
          <div className="bg-gradient-to-t from-secondary-dark to-black/50 text-white rounded-3xl border border-gray-400/40 p-5 max-h-[400px] min-h-[400px] overflow-auto mt-3">
            <div className="p-5">
              <h5 className="text-lg font-semibold">Gameplay Screenshots</h5>
              {selectedGame1 && selectedGame1.short_screenshots ? (
                <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {selectedGame1.short_screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img src={screenshot.image} className="d-block w-100 mt-8" alt={`Screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              ) : (
                <p>No screenshots available.</p>
              )}
            </div>
          </div>
        </div>

        {/* Second Game Comparison Card */}
        <div className="flex-[1_1_48%] max-w-[48%] max-md:max-w-full">
          <div className="bg-gradient-to-t from-secondary-dark to-black/50 text-white rounded-3xl border border-gray-400/40 p-5 max-h-[400px] min-h-[400px] overflow-auto">
            <div className="p-5">
              <Searchbar onGameSelect={handleGameSelect2} />
              {selectedGame2 ? (
                <>
                  <p><strong>Title:</strong> {selectedGame2.name}</p>
                  <p><strong>Released:</strong> {selectedGame2.released}</p>
                  <p><strong>Rating:</strong> {selectedGame2.rating}</p>
                  <p><strong>Platforms:</strong> {selectedGame2.platforms.map(p => p.platform.name).join(', ')}</p>
                  <p><strong>Genre:</strong> {selectedGame2.genres.map(g => g.name).join(', ')}</p>
                </>
              ) : (
                <p>Select a game to see details.</p>
              )}
            </div>
          </div>
          <div className="bg-gradient-to-t from-secondary-dark to-black/50 text-white rounded-3xl border border-gray-400/40 p-5 max-h-[400px] min-h-[400px] overflow-auto mt-3">
            <div className="p-5">
              <h5 className="text-lg font-semibold">Gameplay Screenshots</h5>
              {selectedGame2 && selectedGame2.short_screenshots ? (
                <div id="carouselIndicators2" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {selectedGame2.short_screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img src={screenshot.image} className="d-block w-100 mt-8" alt={`Screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators2" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              ) : (
                <p>No screenshots available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <GameRatingChart 
        game1={selectedGame1 ? selectedGame1.name : 'Game 1'} 
        game2={selectedGame2 ? selectedGame2.name : 'Game 2'} 
        rating1={selectedGame1 ? selectedGame1.rating : 0} 
        rating2={selectedGame2 ? selectedGame2.rating : 0} 
      />
      <div className="flex flex-wrap justify-between items-start w-full gap-5 !ml-0 !mr-0 max-w-full box-border max-md:flex-col max-md:gap-2.5">
        <div className="flex-[1_1_48%] max-w-[48%] max-md:max-w-full">
          <PlatformPieChart platforms={selectedGame1 ? selectedGame1.platforms : []} />
        </div>
        <div className="flex-[1_1_48%] max-w-[48%] max-md:max-w-full">
          <PlatformPieChart platforms={selectedGame2 ? selectedGame2.platforms : []} />
        </div>
      </div>
    </div>
  );
}

export default Compare;
