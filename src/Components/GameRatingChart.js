import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const GameRatingChart = ({ game1, game2, rating1, rating2 }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [game1, game2], 
        datasets: [
          {
            label: 'Game Rating',
            data: [rating1, rating2], 
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

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [game1, game2, rating1, rating2]);

  return (
    <div className="w-[78%] bg-gradient-to-t from-secondary-dark to-black/50 text-white rounded-3xl border border-gray-400/40 p-5 mt-3 max-md:w-full">
      <div className="p-5">
        <h5 className="text-lg font-semibold mb-4">Game Rating</h5>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default GameRatingChart;