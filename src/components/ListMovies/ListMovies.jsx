import results from "../../mocks/with-results.json";
import noResults from "../../mocks/no-results.json";
import "../../App.css";

export const ListMovies = ({ movies }) => {
  const hasMovies = movies.length > 0;

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

export const NoMovies = () => {
  return (
    <>
      <p className="no-movies">No movies found</p>
    </>
  );
};

export const ListMoviesContainer = ({ movies }) => {
  const hasMovies = movies?.length > 0;

  return <>{hasMovies ? <ListMovies movies={movies} /> : <NoMovies />}</>;
};
