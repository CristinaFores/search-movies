import { searchMovies } from "../services/movies.js";
import { useMemo, useState, useRef, useCallback } from "react";

export const useMovies = ({ search, reorder }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previusSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;

      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const reorderMovies = useMemo(() => {
    return reorder
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, reorder]);

  return { movies: reorderMovies, getMovies, loading, error };
};
