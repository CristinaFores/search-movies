import "./App.css";
import { ListMoviesContainer } from "./components/ListMovies/ListMovies";
import { useMovies } from "./hooks/useMovies";
import { useEffect, useState, useRef, useCallback } from "react";
import useSearch from "./hooks/useSearch";
import debounce from "just-debounce-it";

const App = () => {
  const [reorder, setReorder] = useState(false);

  const { search, error, setSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, reorder });

  const debouncedSearch = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const reorderHandler = () => {
    setReorder(!reorder);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedSearch(newSearch);
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Search Movies</h1>

          <form className="form" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={search}
              name="query"
              type="text"
              placeholder="Avengers, Star wars, The Matrix..."
            />

            <label>
              Ordernar alfabeticamente
              <input
                type="checkbox"
                checked={reorder}
                onChange={reorderHandler}
              />
            </label>

            <button type="submit">Search</button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </header>

        <main>
          {loading ? (
            <span className="loader"></span>
          ) : (
            <ListMoviesContainer movies={movies} />
          )}
        </main>
      </div>
    </>
  );
};

export default App;
