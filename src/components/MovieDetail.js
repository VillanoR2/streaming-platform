import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch('/movies.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const movies = await response.json();
                const movie = movies.find(movie => movie.id === parseInt(id));
                setMovie(movie);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <div>Cargando...</div>;

    return (
        <div className="movie-detail">
            <img src={movie.image} alt={movie.name} className="movie-detail__image" />
            <div className="movie-detail__info">
                <h2 className="movie-detail__title">{movie.name}</h2>
                <p className="movie-detail__director">Director: {movie.director}</p>
                <p className="movie-detail__year">Año: {movie.year}</p>
                <p className="movie-detail__duration">Duración: {movie.duration}</p>
                <p className="movie-detail__synopsis">{movie.synopsis}</p>
                <div className="movie-detail__trailer">
                    <iframe
                        src={movie.trailer}
                        title="trailer"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
