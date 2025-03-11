import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../App.css';
import '../Styles/timeline.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['2017', '2020', '2024'],
  datasets: [
    {
      label: 'Platform Releases',
      data: [1, 2, 3],
      fill: false,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year',
      },
    },
    y: {
      display: false,
    },
  },
};

const Timeline = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

  };

  return (
    

    <><h1>Timeline</h1><div className="timeline-container">
     


      <div className="timeline-content">
        <div className="timeline-item details">
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange} />
      </div>
          <h4>Company:</h4>
          <p>Epic Games</p>
          <h4>Platforms:</h4>
          <p>Console, PC</p>
          <h4>Price:</h4>
          <p>Free</p>
          <h4>Age Rating:</h4>
          <p>8+</p>
          <h4>Genre:</h4>
          <p>Battle Royale</p>
        </div>

        <div className="timeline-carousel">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/fortnite_1.jpg"   alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src="/images/fortnite_2.jpg"  alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="/images/fortnite_3.jpeg" alt="Slide 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="timeline-container">
    <div className="timeline-item releases">
        <div class="timeline-graph-title">
          <h2>Platform Releases</h2>
          </div>

          <div class="timeline-graph">
          <Line data={data} options={options} />
                </div>
              </div>
            </div>
        </>
  );
};

export default Timeline;