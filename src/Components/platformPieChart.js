import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PlatformPieChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Xbox', 'Playstation', 'PC', 'Mobile'],
      datasets: [{
        label: 'Platform Distribution',
        data: [1, 1, 1, 0],
        backgroundColor: [
          'rgb(64, 0, 255)',
          'rgb(54, 162, 235)',
          'rgb(0, 157, 255)',
          'rgb(0, 114, 140)',
        ],
        hoverOffset: 4
      }]
    };

    const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };

    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, config);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">Platform Distribution</h5>
        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
          <canvas ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default PlatformPieChart;