import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const GameRatingChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fortnite', 'PUBG'],
        datasets: [
          {
            label: 'Game Rating',
            data: [90, 80],
            backgroundColor: 'rgba(141, 99, 255, 0.2)',
            borderColor: 'rgb(154, 99, 255)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Game Rating</h5>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default GameRatingChart;