import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleRentClick = (event) => {
    event.stopPropagation();
    navigate('/rent');
  };

  const handleBuyClick = (event) => {
    event.stopPropagation();
    navigate('/buy');
  };

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <img src={movie.image} alt={movie.name} className="movie-card__image" />
      <h3 className="movie-card__title">{movie.name}</h3>
      <p className="movie-card__synopsis">{movie.synopsis}</p>
      <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="movie-card__trailer">Ver Tráiler</a>
      <div className="movie-card__actions">
        <button onClick={handleRentClick} className="movie-card__button movie-card__button--rent">Alquilar</button>
        <button onClick={handleBuyClick} className="movie-card__button movie-card__button--buy">Comprar</button>
      </div>
    </div>
  );
}

export default MovieCard;