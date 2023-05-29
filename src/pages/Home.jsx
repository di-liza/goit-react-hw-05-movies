import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
// import '../../node_modules/react-paginate/theme/basic/react-paginate.css';

import { getTrendingMovies } from 'servises';
// SwButtons;
import { MoviesList, Hero, Loader } from 'components';

function Home({ itemsPerPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [itemOffset, setItemOffset] = useState(0);
  const searchPage = searchParams.get('page') ?? 1;

  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrandMovies = async () => {
      if (searchPage >= 1) {
        try {
          setIsLoading(true);
          const data = await getTrendingMovies(searchPage);
          console.log('data:', data);
          setTotalPages(data.total_pages);
          setTotalResults(data.total_results);
          setMovies(data.results);
        } catch (error) {
          console.log('error:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getTrandMovies();
  }, [searchPage]);

  // const handlePageToggle = action => {
  //   if (searchPage === 1 && action === 'prev')
  //     return setSearchParams({ page: 1 });

  //   const prevPage = Number(searchParams.get('page')) || 1;

  //   if (action === 'prev') {
  //     setSearchParams({ page: prevPage - 1 });
  //   } else {
  //     setSearchParams({ page: prevPage + 1 });
  //   }
  // };
  const handlePageClick = event => {
    // const newOffset = (event.selected * 20) % movies.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setSearchParams({ page: event.selected + 1 });
  };

  return (
    <div style={{ paddingBottom: '20px' }}>
      <Hero />
      <MoviesList movies={movies} path={'movies/'} />
      {/* <SwButtons onClickSwichBtn={handlePageToggle} page={searchPage} /> */}
      {isLoading && <Loader />}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Home;

// Example for swich btns
/**
 *  const handlePageToggle = action => {
       setPage(prev => {
         if (prev === 1 && action === 'prev') return setPage(1);
         return action === 'prev' ? prev - 1 : prev + 1;
       });
     };
 */
