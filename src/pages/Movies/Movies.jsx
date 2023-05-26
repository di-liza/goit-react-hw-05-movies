import React, { useEffect, useState } from 'react';
import { searchMovie } from 'servises';
import { MoviesList, SearchForm } from 'components';
import { useLocation } from 'react-router-dom';

// import { useMemo } from 'react';

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
  const location = useLocation();
  console.log('location:', location);
  // console.log(filteredMovies);

  const getFilteredMovies = searchQuery => {
    const normalizedQuery = searchQuery.toLowerCase();

    setFilter(normalizedQuery);
  };

  return (
    <main>
      <SearchForm filterMovie={getFilteredMovies} />

      {filteredMovies !== [] && (
        <MoviesList movies={filteredMovies} location={location} />
      )}
    </main>
  );
}

export default Movies;
