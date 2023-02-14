import results from "../mocks/with-results.json";
export const useMovies = () => {
  const movies = results.Search;

  const mappedovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedovies };
};
