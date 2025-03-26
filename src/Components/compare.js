import React, { useState, useContext } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../Styles/compare.css';
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
    <div className="container compare-container">
      <h1 className="text-center my-4">Game Comparison</h1>
      <div className="row compare-content">
        {/* First Game Comparison Card */}
        <div className="col-md-6 compare-item">
          <div className="card">
            <div className="card-body">
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
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Gameplay Screenshots</h5>
              {selectedGame1 && selectedGame1.short_screenshots ? (
                <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {selectedGame1.short_screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img src={screenshot.image} className="d-block w-100" alt={`Screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
        <div className="col-md-6 compare-item">
          <div className="card">
            <div className="card-body">
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
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Gameplay Screenshots</h5>
              {selectedGame2 && selectedGame2.short_screenshots ? (
                <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {selectedGame2.short_screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img src={screenshot.image} className="d-block w-100" alt={`Screenshot ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
      <div className="row compare-content">
        <div className="col-md-6 compare-item">
          <PlatformPieChart platforms={selectedGame1 ? selectedGame1.platforms : []} />
        </div>
        <div className="col-md-6 compare-item">
          <PlatformPieChart platforms={selectedGame2 ? selectedGame2.platforms : []} />
        </div>
      </div>
    </div>
  );
}

export default Compare;