import React, { useContext, useState } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Searchbar from './searchbar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Timeline = () => {
  const { selectedGame, setSelectedGame, chartData, setChartData } = useContext(GlobalStateContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedGame && selectedGame.short_screenshots) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGame.short_screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedGame && selectedGame.short_screenshots) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGame.short_screenshots.length) % selectedGame.short_screenshots.length);
    }
  };

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
    setCurrentImageIndex(0);

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
            backgroundColor: 'rgb(102, 192, 244)',
            borderColor: 'rgb(65, 122, 155)',
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
      <h1 className="mt-12 ml-0 p-2.5 px-5 text-white text-center self-center font-montserrat max-w-full overflow-x-hidden text-3xl md:text-5xl font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">Timeline</h1>
      <div className="flex flex-col justify-start items-center text-left my-0 mx-5 mb-[5%] max-w-[calc(100vw-310px)] font-montserrat bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white !border-2 !border-red-500 shadow-steam p-6 rounded w-full box-border overflow-x-hidden max-md:max-w-[100vw] max-md:mx-2.5 max-md:p-4">
        <div className="flex justify-between items-start w-full gap-5 overflow-x-hidden max-md:flex-col">
          <div className="flex-[2]">
            <Searchbar onGameSelect={handleGameSelect} />
            {selectedGame ? (
              <>
                <h4 className="text-lg font-semibold mt-4 text-[#66c0f4]">Title:</h4>
                <p className="text-[#8b9bb4]">{selectedGame.name || 'Unknown'}</p>
                <h4 className="text-lg font-semibold mt-4 text-[#66c0f4]">Platforms:</h4>
                <p className="text-[#8b9bb4]">{selectedGame.platforms.map((p) => p.platform.name).join(', ')}</p>
                <h4 className="text-lg font-semibold mt-4 text-[#66c0f4]">Rating:</h4>
                <p className="text-[#8b9bb4]">{selectedGame.rating || 'Unknown'}</p>
                <h4 className="text-lg font-semibold mt-4 text-[#66c0f4]">Genre:</h4>
                <p className="text-[#8b9bb4]">{selectedGame.genres.map((g) => g.name).join(', ')}</p>
              </>
            ) : (
              <p className="text-[#8b9bb4] mt-4">Select a game to see details.</p>
            )}
          </div>

          <div className="flex-1 p-5 rounded-lg my-2.5">
            {selectedGame && selectedGame.short_screenshots ? (
              <div className="relative rounded overflow-hidden group">
                <img 
                  src={selectedGame.short_screenshots[currentImageIndex].image} 
                  className="w-full h-[300px] object-cover rounded-lg" 
                  alt={`Screenshot ${currentImageIndex + 1}`} 
                />
                {selectedGame.short_screenshots.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-label="Previous"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-label="Next"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
                      {currentImageIndex + 1} / {selectedGame.short_screenshots.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full h-[300px] bg-[#1e2329] rounded-lg flex items-center justify-center text-[#8b9bb4]">
                No screenshots available
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center text-left my-0 mx-5 mb-[5%] max-w-[calc(100vw-310px)] font-montserrat bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white !border !border-[#3c4f62]/20 shadow-steam p-6 rounded w-full box-border overflow-x-hidden max-md:max-w-[100vw] max-md:mx-2.5 max-md:p-4">
        <div className="flex justify-between my-5 mx-12 w-full max-md:mx-2.5">
          <div className="self-center">
            <h2 className="text-2xl font-semibold">Game Release Date</h2>
          </div>
          <div className="flex-1">
            {selectedGame ? (
              <Line data={chartData} options={options} />
            ) : (
              <p className="text-[#8b9bb4]">Select a game to see its timeline</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
