import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovies from '../hooks/useFetchMovies';

function Movie() {
  const { id } = useParams();
  const movies = useFetchMovies();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Película no encontrada</div>;

  return (
    <div className="movie-page">
      <img src={movie.image} alt={movie.name} className="movie-page__image" />
      <h1 className="movie-page__title">{movie.name}</h1>
      <p className="movie-page__synopsis">{movie.synopsis}</p>
      <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="movie-page__trailer">Ver Tráiler</a>
    </div>
  );
}

export default Movie;