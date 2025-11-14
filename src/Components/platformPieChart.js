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
            'rgb(102, 192, 244)',
            'rgb(65, 122, 155)',
            'rgb(42, 63, 95)',
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
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#8b9bb4',
              padding: 15,
              font: {
                size: 12,
              },
            },
          },
          tooltip: {
            backgroundColor: 'rgba(27, 40, 56, 0.95)',
            titleColor: '#66c0f4',
            bodyColor: '#ffffff',
            borderColor: '#3c4f62',
            borderWidth: 1,
            padding: 12,
          },
        },
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
    <div className="bg-gradient-to-br from-[#1b2838] to-[#1e2329] text-white rounded !border !border-[#3c4f62]/20 shadow-steam p-6">
      <h5 className="text-xl font-bold mb-6 text-white">Platform Distribution</h5>
      <div className="relative h-[300px] w-full">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default PlatformPieChart;