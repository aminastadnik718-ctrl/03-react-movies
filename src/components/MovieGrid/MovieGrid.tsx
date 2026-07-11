import React from 'react';
import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, onSelect }) => {
    const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
    return (
      <ul className={css.grid}>
{sortedMovies.map((movie) => (
    <li key={movie.id} onClick={() => onSelect(movie)}>
 <div className={css.card}>
 <img
		 className={css.image}
		src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Image'}
                 
		 alt={movie.title}
		 loading="lazy"
		
/>
	 <h2 className={css.title}>{movie.title}</h2>
 </div>
 </li>
))}
</ul>
    )
}
 