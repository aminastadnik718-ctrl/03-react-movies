import axios from "axios";
import type { Movie } from "../types/movie";

const TMDB_TOKEN = import.meta.env.VITE_TMDB_API_KEY;

const movieInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
    },
});

interface fetchMoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}



export const fetchMovies = async (query: string, page: number = 1): Promise<fetchMoviesResponse> => {
    const response = await movieInstance.get<fetchMoviesResponse>("/search/movie",
        {
            params: {
              include_adult: false,
                query: query,
                page: page,
                language: "en-US",
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
            },
        }
    );
    return response.data;
}