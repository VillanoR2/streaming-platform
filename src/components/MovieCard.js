import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.name} className="movie-card__image" />
      <h3 className="movie-card__title">{movie.name}</h3>
      <p className="movie-card__synopsis">{movie.synopsis}</p>
      <Link to={`/movie/${movie.id}`} className="movie-card__link">Detalles</Link>
      <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="movie-card__trailer">Ver Tráiler</a>
    </div>
  );
}

export default MovieCard;