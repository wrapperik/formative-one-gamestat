import React, { useContext } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css';
import '../Styles/timeline.css';
import Searchbar from './searchbar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Timeline = () => {
  const { selectedGame, setSelectedGame, chartData, setChartData } = useContext(GlobalStateContext);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Released in ${context.label}`;
          },
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Year',
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        display: false,
      },
    },
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);

    if (game && game.released) {
      const releaseDate = new Date(game.released);
      const releaseYear = !isNaN(releaseDate) ? releaseDate.getFullYear() : null;

      if (!releaseYear) {
        console.warn('Invalid release date:', game.released);
        return;
      }

      const startYear = releaseYear - 5;
      const endYear = releaseYear + 5;
      const dynamicYears = Array.from({ length: endYear - startYear + 1 }, (_, i) => (startYear + i).toString());

      setChartData({
        labels: dynamicYears,
        datasets: [
          {
            label: `${game.name} Timeline`,
            data: dynamicYears.map((year) => (year === releaseYear.toString() ? 0.2 : 0.2)),
            fill: false,
            backgroundColor: 'rgb(0, 159, 250)',
            borderColor: 'rgb(11, 72, 107)',
            tension: 0,
            pointRadius: dynamicYears.map((year) => (year === releaseYear.toString() ? 6 : 0)),
            pointHoverRadius: dynamicYears.map((year) => (year === releaseYear.toString() ? 12 : 0)),
            showLine: true,
          },
        ],
      });
    } else {
      console.warn('Game release date is missing or invalid.');
      setChartData({
        labels: [],
        datasets: [
          {
            label: 'Game Timeline',
            data: [],
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1,
          },
        ],
      });
    }
  };

  return (
    <>
      <h1>Timeline</h1>
      <div className="timeline-container">
        <div className="timeline-content">
          <div className="timeline-item details">
            <Searchbar onGameSelect={handleGameSelect} />
            {selectedGame ? (
              <>
                <h4>Title:</h4>
                <p>{selectedGame.name || 'Unknown'}</p>
                <h4>Platforms:</h4>
                <p>{selectedGame.platforms.map((p) => p.platform.name).join(', ')}</p>
                <h4>Age Rating:</h4>
                <p>{selectedGame.rating || 'Unknown'}</p>
                <h4>Genre:</h4>
                <p>{selectedGame.genres.map((g) => g.name).join(', ')}</p>
              </>
            ) : (
              <p>Select a game to see details.</p>
            )}
          </div>

          <div className="timeline-carousel">
            <div id="carouselIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {selectedGame && selectedGame.short_screenshots
                  ? selectedGame.short_screenshots.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))
                  : null}
              </div>
              <div className="carousel-inner">
                {selectedGame && selectedGame.short_screenshots
                  ? selectedGame.short_screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      >
                        <img
                          src={screenshot.image}
                          className="d-block w-100"
                          alt={`Screenshot ${index + 1}`}
                        />
                      </div>
                    ))
                  : null}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline-item releases">
          <div className="timeline-graph-title">
            <h2>Game Release Date</h2>
          </div>
          <div className="timeline-graph">
            {selectedGame ? (
              <Line data={chartData} options={options} />
            ) : (
              <p>Select a game to see its timeline</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;