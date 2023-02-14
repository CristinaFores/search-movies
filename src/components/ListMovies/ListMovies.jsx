import results from "../../mocks/with-results.json";
import noResults from "../../mocks/no-results.json";
import "../../App.css";
import { useMovies } from "../../hooks/useMovies";

const ListMovies = ({ movies }) => {
  return (
    <>
      <ul className="movies">
        {movies.map((movie) => (
          <li key={movie.id} className="movie">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

const NoMovies = ({}) => {
  return (
    <>
      <ul className="movies">
        {results.Search.map((movie) => (
          <li key={movie.imdbID} className="movie">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export const ListMoviesContainer = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return hasMovies ? (
    <ListMovies movies={movies} />
  ) : (
    <>
      <NoMovies results={results} />
    </>
  );
};
