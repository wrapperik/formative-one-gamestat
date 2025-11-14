import React, { useContext, useState, useEffect } from 'react';
import { GlobalStateContext } from '../Context/GlobalStateContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Searchbar from './searchbar';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Timeline = () => {
  const { selectedGame, setSelectedGame, chartData, setChartData } = useContext(GlobalStateContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    if (selectedGame && selectedGame.id) {
      fetch(`https://api.rawg.io/api/games/${selectedGame.id}?key=d9acd6ae3c6941cb9d26d2e233eb26c2`)
        .then(res => res.json())
        .then(data => {
          console.log('Game Details:', data);
          console.log('Background Image:', data.background_image);
          setGameDetails(data);
        })
        .catch(err => console.error('Error fetching game details:', err));
    }
  }, [selectedGame]);

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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1b2838',
        titleColor: '#66c0f4',
        bodyColor: '#8b9bb4',
        borderColor: '#3c4f62',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function (context) {
            const value = context.parsed.y;
            return `${value.toLocaleString()} users added this game`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: '#3c4f62',
          lineWidth: 0.5,
        },
        ticks: {
          color: '#8b9bb4',
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#3c4f62',
          lineWidth: 0.5,
        },
        ticks: {
          color: '#8b9bb4',
          font: {
            size: 12,
          },
          callback: function(value) {
            return value.toLocaleString();
          },
        },
        title: {
          display: true,
          text: 'Community Engagement',
          color: '#66c0f4',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
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

      // Create a more meaningful visualization with user engagement data
      const metrics = [
        { label: 'Added by Users', value: game.added || 0 },
        { label: 'Ratings Count', value: game.ratings_count || 0 },
        { label: 'Reviews Count', value: game.reviews_count || 0 },
        { label: 'Suggestions', value: game.suggestions_count || 0 },
      ];

      setChartData({
        labels: metrics.map(m => m.label),
        datasets: [
          {
            label: 'Community Metrics',
            data: metrics.map(m => m.value),
            backgroundColor: [
              'rgba(102, 192, 244, 0.8)',
              'rgba(102, 192, 244, 0.6)',
              'rgba(102, 192, 244, 0.4)',
              'rgba(102, 192, 244, 0.2)',
            ],
            borderColor: '#66c0f4',
            borderWidth: 1,
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
      {/* Background Image Layer - Only for timeline page */}
      {(selectedGame?.background_image || gameDetails?.background_image) && (
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${selectedGame?.background_image || gameDetails?.background_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            zIndex: 0,
          }}
        />
      )}
      
      <div className="min-h-screen pb-24 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 md:pt-12 font-montserrat">
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">Game Detail</h1>
        </div>
      <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white !border !border-[#3c4f62]/20 shadow-steam hover:shadow-steam-hover hover:border-[#66c0f4]/30 transition-all duration-300 rounded p-6 mb-6">
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

      <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white !border !border-[#3c4f62]/20 shadow-steam hover:shadow-steam-hover hover:border-[#66c0f4]/30 transition-all duration-300 rounded p-6">
        <div className="flex justify-between items-start w-full gap-8 max-md:flex-col">
          <div className="self-center min-w-[200px]">
            <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
            {selectedGame && gameDetails && (
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#66c0f4] font-semibold">Released:</span>
                  <span className="text-[#8b9bb4]">{selectedGame.released}</span>
                </div>
                {gameDetails.metacritic && (
                  <div className="flex items-center gap-2">
                    <span className="text-[#66c0f4] font-semibold">Metacritic:</span>
                    <span className="px-2 py-1 bg-[#66c0f4]/20 text-[#66c0f4] rounded font-bold">{gameDetails.metacritic}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="text-[#66c0f4] font-semibold">Playtime:</span>
                  <span className="text-[#8b9bb4]">{gameDetails.playtime || 0} hours avg</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 min-h-[300px]">
            {selectedGame ? (
              <Bar data={chartData} options={options} />
            ) : (
              <div className="h-[300px] flex items-center justify-center">
                <p className="text-[#8b9bb4]">Select a game to see engagement metrics</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Timeline;
