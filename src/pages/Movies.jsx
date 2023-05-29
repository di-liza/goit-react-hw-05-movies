import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { searchMovie } from 'servises';
import { MoviesList, SearchBar, Loader, Footer } from 'components';
import { Container } from 'components/Layout/Layout.styled';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const searchPage = searchParams.get('page') ?? 1;

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);

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
      query.trim() !== ''
        ? setSearchParams({ query, page: 1 })
        : setSearchParams({});
    setQuery('');
    return saveQuery;
  };

  useEffect(() => {
    const getMovies = async () => {
      if (searchQuery !== '') {
        try {
          setStatus('pending');
          const { results, total_pages } = await searchMovie(
            searchQuery,
            searchPage
          );
          if (results.length !== 0) {
            setTotalPages(total_pages);
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
  }, [searchQuery, searchPage]);

  // const handlePageToggle = action => {
  //   if (searchPage === 1 && action === 'prev')
  //     return setSearchParams({ query: searchQuery, page: 1 });

  //   const prevPage = Number(searchParams.get('page')) || 1;

  //   if (action === 'prev') {
  //     setSearchParams({ query: searchQuery, page: prevPage - 1 });
  //   } else {
  //     setSearchParams({ query: searchQuery, page: prevPage + 1 });
  //   }
  // };

  const handlePageClick = event => {
    setSearchParams({ query: searchQuery, page: event.selected + 1 });
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
        <Container>
          <MoviesList movies={movies} />
          {/* <SwButtons onClickSwichBtn={handlePageToggle} page={searchPage} /> */}
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={'paginationListContainer'}
          />
          <Footer />
        </Container>
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
