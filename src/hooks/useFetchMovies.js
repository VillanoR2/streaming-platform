import { useState, useEffect } from 'react';
import moviesData from '../data/movies.json';

function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);

  return movies;
}

export default useFetchMovies;