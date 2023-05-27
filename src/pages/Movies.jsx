import React, { useEffect, useState } from 'react';
import { searchMovie } from 'servises';
import { MoviesList, SearchBar } from 'components';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components';

function Movies() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [status, setStatus] = useState('idle');

  const handleInputChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setStatus('idle');
      console.log('Enter a keyword to search for the movie.');
    }
    const saveQuery =
      query.trim() !== '' ? setSearchParams({ query }) : setSearchParams({});
    setQuery('');
    return saveQuery;
  };

  useEffect(() => {
    const getMovies = async () => {
      if (searchQuery !== '') {
        try {
          setStatus('pending');
          const { results } = await searchMovie(searchQuery);
          if (results.length !== 0) {
            setStatus('resolved');
            setMovies([...results]);
          } else {
            setStatus('idle');
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMovies();
  }, [searchQuery]);

  return (
    <main>
      {status === 'pending' && <Loader />}
      <SearchBar
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
        inputValue={query}
      />
      {status === 'idle' && (
        <p
          style={{
            margin: '30px auto',
            width: '320px',
          }}
        >
          Enter a keyword to search for the movie.
        </p>
      )}

      {status === 'resolved' && (
        <MoviesList movies={movies} location={location} />
      )}
    </main>
  );
}

export default Movies;
