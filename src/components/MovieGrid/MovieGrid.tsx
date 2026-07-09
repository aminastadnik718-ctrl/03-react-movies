import css from './MovieGrid.module.css';
import type { Movie } from '../../types/movie';

interface MovieGridProps {
    movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
    movies.sort((a, b) => a.title.localeCompare(b.title));
    return (
        <ul className={css.movieGrid}>
            {movies.map((movie) => (
                <li key={movie.id} className={css.movieCard}>
                    <img
                        src={movie.poster_path}
                        alt={`${movie.title} poster`}
                        className={css.moviePoster}
                    />
                    <h2 className={css.movieTitle}>{movie.title}</h2>
                    <p className={css.movieYear}>{movie.release_date}</p>
                </li>
            ))}
        </ul>
    );
}
 