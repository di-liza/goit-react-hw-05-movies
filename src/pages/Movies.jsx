import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { searchMovie } from 'servises';
import { MoviesList, SearchBar, Loader, SwButtons } from 'components';

function Movies() {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.warn(
        'You entered an empty query. Enter a keyword to search for a movie. '
      );
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
          const { results } = await searchMovie(searchQuery, page);
          if (results.length !== 0) {
            setMovies([...results]);
            setStatus('resolved');
          } else {
            setStatus('idle');
            return toast.info(
              `Sorry, we could not find anything for the query "${searchQuery}". Try again.`
            );
          }
        } catch (error) {
          setError(error);
          setStatus('rejected');
        }
      }
    };
    getMovies();
  }, [searchQuery, page]);

  const handlePageToggle = action => {
    setPage(prev => {
      if (prev === 1 && action === 'prev') return setPage(1);
      return action === 'prev' ? prev - 1 : prev + 1;
    });
  };

  return (
    <main>
      {status === 'rejected' && (
        <p style={{ margin: '100px auto', width: '320px' }}>
          Something went wrong, try again. <span>{error}</span>
        </p>
      )}
      {status === 'pending' && <Loader />}
      <SearchBar
        onFormSubmit={handleFormSubmit}
        onInputChange={handleInputChange}
        inputValue={query}
      />
      {status === 'resolved' && (
        <div style={{ paddingBottom: '20px' }}>
          <MoviesList movies={movies} />{' '}
          <SwButtons onClickSwichBtn={handlePageToggle} page={page} />
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  );
}

export default Movies;
