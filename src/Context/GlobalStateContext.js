import React, { createContext, useState } from 'react';

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [chartData, setChartData] = useState({
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


  const [selectedGame1, setSelectedGame1] = useState(null);
  const [selectedGame2, setSelectedGame2] = useState(null);

  return (
    <GlobalStateContext.Provider
      value={{
        selectedGame,
        setSelectedGame,
        chartData,
        setChartData,
        selectedGame1,
        setSelectedGame1,
        selectedGame2,
        setSelectedGame2,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};