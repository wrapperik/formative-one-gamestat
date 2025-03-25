import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const GameRatingChart = ({ game1, game2, rating1, rating2 }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [game1, game2], // Game names
        datasets: [
          {
            label: 'Game Rating',
            data: [rating1, rating2], // Ratings
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: (context) => `${context.raw} / 5`,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Games',
            },
          },
          y: {
            beginAtZero: true,
            max: 5,
            title: {
              display: true,
              text: 'Rating',
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [game1, game2, rating1, rating2]); // Re-run effect when props change

  return (
    <div className="ratingChart mt-3">
      <div className="card-body">
        <h5 className="card-title">Game Rating</h5>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default GameRatingChart;