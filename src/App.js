// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movie from './pages/Movie';
import RentPage from './pages/RentPage';
import BuyPage from './pages/BuyPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
