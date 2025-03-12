import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../Styles/compare.css';
import GameRatingChart from './GameRatingChart';
import PlatformPieChart from './platformPieChart';

function Compare() {
  return (
    <div className="container compare-container">
      <h1 className="text-center my-4">Game Comparison</h1>
      <div className="row compare-content">
        <div className="col-md-6 compare-item">
          <div className="card">
            <div className="card-body">
              <input type="text" className="form-control mb-3" placeholder="Fortnite" />
              <p><strong>Company:</strong> Epic Games</p>
              <p><strong>Platforms:</strong> Console, PC</p>
              <p><strong>Price:</strong> Free</p>
              <p><strong>Age Rating:</strong> 8+</p>
              <p><strong>Genre:</strong> Battle Royale</p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Gameplay Screenshots</h5>
              <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/fortnite_1.jpg" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/fortnite_2.jpg" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/fortnite_3.jpeg" className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 compare-item">
          <div className="card">
            <div className="card-body">
              <input type="text" className="form-control mb-3" placeholder="PUBG" />
              <p><strong>Company:</strong> Krafton</p>
              <p><strong>Platforms:</strong> Console, PC</p>
              <p><strong>Price:</strong> Free</p>
              <p><strong>Age Rating:</strong> 16+</p>
              <p><strong>Genre:</strong> Battle Royale</p>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Gameplay Screenshots</h5>
              <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/PUBG_3.jpg" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/PUBG.jpeg" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/PUBG2.jpeg" className="d-block w-100" alt="Slide 3" />
                  </div>
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
            </div>
          </div>
        </div>
      </div>
      
      <GameRatingChart />
      <div className="row compare-content">
        <div className="col-md-6 compare-item">
          <PlatformPieChart />
        </div>
        <div className="col-md-6 compare-item">
          <PlatformPieChart />
        </div>
      </div>
    </div>
  );
}

export default Compare;