import { useState } from 'react';
import  { Toaster } from 'react-hot-toast';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { MovieModal } from '../MovieModal/MovieModal';
import {fetchMovies } from '../../services/movieService';
import type { Movie } from '../../types/movie';
import { useQuery } from '@tanstack/react-query';
import Pagination from '../ReactPaginate/ReactPaginate';





export default function App() {

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

const {
  data ,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['movies', query, page],
  queryFn: () => fetchMovies(query, page),
  enabled: !!query,
});
const movies = data?.results ?? [];
const totalPages = data?.total_pages ?? 0;


 const handleSearchSubmit = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(1);
  }
  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      
      {isError && <ErrorMessage />}
      
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={setSelectedMovie} />
      )}
      {totalPages > 1 && (
  <Pagination
    totalPages={totalPages}
    currentPage={page}
    onPageChange={setPage}
  />
)}
      
      {isLoading && <Loader />}
      
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
      
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

 