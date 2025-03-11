import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://via.placeholder.com/200" className="d-block w-100" alt="gameplay 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://via.placeholder.com/200" className="d-block w-100" alt="gameplay 2" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
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
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://via.placeholder.com/200" className="d-block w-100" alt="gameplay 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://via.placeholder.com/200" className="d-block w-100" alt="gameplay 2" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
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