import React, { useEffect, useState } from 'react';
import { searchMovie } from 'servises';
import { MoviesList, SearchForm } from 'components';

function Movies() {
  const [filter, setFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      if (filter !== '') {
        try {
          const { results } = await searchMovie(filter);
          setFilteredMovies(results);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMovies();
  }, [filter]);

  const getFilteredMovies = searchQuery => {
    const normalizedQuery = searchQuery.toLowerCase();

    setFilter(normalizedQuery);
  };

  return (
    <main>
      <SearchForm filterMovie={getFilteredMovies} />

      {filteredMovies !== [] && <MoviesList movies={filteredMovies} />}
    </main>
  );
}

export default Movies;
