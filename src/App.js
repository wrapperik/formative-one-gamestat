import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Components/navbar';
import Compare from './Components/compare';
import Home from './Components/home';
import Timeline from './Components/timeline';
import Footer from './Components/Footer';




function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
