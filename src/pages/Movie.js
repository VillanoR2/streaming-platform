// src/pages/MoviePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovies from '../hooks/useFetchMovies';
import '../App.css';

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
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Año:</strong> {movie.year}</p>
      <p><strong>Duración:</strong> {movie.duration}</p>
      <p><strong>Categoría:</strong> {movie.category}</p>
      <p><strong>Idioma:</strong> {movie.language}</p>
      <p><strong>Actores:</strong> {movie.actors.join(', ')}</p>
      <div className="movie-page__trailer">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Movie;
