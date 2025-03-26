import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const PlatformPieChart = ({ platforms }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    
    const platformCounts = platforms.reduce((acc, platform) => {
      const platformName = platform.platform.name;
      acc[platformName] = (acc[platformName] || 0) + 1;
      return acc;
    }, {});

    const data = {
      labels: Object.keys(platformCounts),
      datasets: [
        {
          label: 'Platform Distribution',
          data: Object.values(platformCounts),
          backgroundColor: [
            'rgb(64, 0, 255)',
            'rgb(54, 162, 235)',
            'rgb(0, 157, 255)',
            'rgb(0, 114, 140)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
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
  }, [platforms]); 

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