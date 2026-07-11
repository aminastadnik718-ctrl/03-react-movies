import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { MovieModal } from '../MovieModal/MovieModal';
import {fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchMovies(query);

        if (data.length === 0) {
          toast.error('No movies found for your request.');
        }

        setMovies(data);
      } catch  {
        setIsError(true);
        toast.error('Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [query]);

  const handleSearchSubmit = (newQuery: string) => {
    setMovies([]); 
    setQuery(newQuery);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      
      {isError && <ErrorMessage />}
      
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={setSelectedMovie} />
      )}
      
      {isLoading && <Loader />}
      
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
      
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

 