import axios from "axios";
import type { Movie } from "../types/movie";




interface MovieResponse {
    results: Movie[];

}



export const fetchMovies = async (): Promise<Movie[]> => {
    const {data} = await axios.get<MovieResponse>(
        "https://api.themoviedb.org/3/movie",
        {
            params: {
                api_key: import.meta.env.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmE3OGY2YTE2MjA5NDVmNThiYTExNzQxY2RkMzczMCIsIm5iZiI6MTc4MzU5NTc1Ny4xMzkwMDAyLCJzdWIiOiI2YTRmODJlZDVhNTM0MmI5NWRjNDJkNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EVt1dCOlBQOrzzpaldk17UrClKn1FDQKdOHpcX9f1rk,
            },
            headers: {
                Authorization: `Bearer ${import.meta.env.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmE3OGY2YTE2MjA5NDVmNThiYTExNzQxY2RkMzczMCIsIm5iZiI6MTc4MzU5NTc1Ny4xMzkwMDAyLCJzdWIiOiI2YTRmODJlZDVhNTM0MmI5NWRjNDJkNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EVt1dCOlBQOrzzpaldk17UrClKn1FDQKdOHpcX9f1rk}`,
            },
        }
    );
    return data.results;
}