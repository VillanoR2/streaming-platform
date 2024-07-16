// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import useFetchMovies from '../hooks/useFetchMovies';
import '../App.css';

function Home() {
  const movies = useFetchMovies();
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = (query) => {
    const results = movies.filter(movie =>
      movie.name.toLowerCase().includes(query.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(query.toLowerCase()) ||
      movie.category.toLowerCase().includes(query.toLowerCase()) ||
      movie.year.toString().includes(query) ||
      movie.director.toLowerCase().includes(query.toLowerCase()) ||
      movie.language.toLowerCase().includes(query.toLowerCase()) ||
      movie.actors.some(actor => actor.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredMovies(results);
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;
