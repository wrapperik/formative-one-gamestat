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
              'rgba(102, 192, 244, 0.3)',
              'rgba(65, 122, 155, 0.3)',
            ],
            borderColor: [
              'rgba(102, 192, 244, 1)',
              'rgba(65, 122, 155, 1)',
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
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(27, 40, 56, 0.95)',
            titleColor: '#66c0f4',
            bodyColor: '#ffffff',
            borderColor: '#3c4f62',
            borderWidth: 1,
            padding: 12,
            displayColors: true,
            callbacks: {
              label: (context) => `Rating: ${context.raw} / 5`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 5,
            grid: {
              color: 'rgba(60, 79, 98, 0.3)',
            },
            ticks: {
              color: '#8b9bb4',
            },
            title: {
              display: true,
              text: 'Rating (out of 5)',
              color: '#66c0f4',
              font: {
                size: 13,
                weight: 'bold',
              },
            },
          },
          y: {
            grid: {
              color: 'rgba(60, 79, 98, 0.3)',
            },
            ticks: {
              color: '#8b9bb4',
              font: {
                size: 12,
              },
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
    <div className="w-full bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white rounded !border !border-[#3c4f62]/20 shadow-steam p-6">
      <h5 className="text-xl font-bold mb-6 text-white">Game Rating Comparison</h5>
      <canvas ref={chartRef} />
    </div>
  );
};

export default GameRatingChart;