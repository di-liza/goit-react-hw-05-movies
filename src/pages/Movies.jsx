import React, { useEffect, useState } from 'react';
import { searchMovie } from 'servises';
import { MoviesList, SearchForm } from 'components';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const save =
      query !== '' ? setSearchParams({ query }) : setSearchParams({});
    setQuery('');
    return save;
  };

  useEffect(() => {
    const getMovies = async () => {
      if (searchQuery !== '') {
        try {
          const { results } = await searchMovie(searchQuery);
          setMovies([...results]);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <main>
      <SearchForm
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
        inputValue={query}
      />

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </main>
  );
}

export default Movies;
