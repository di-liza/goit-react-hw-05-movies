import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
// import '../../node_modules/react-paginate/theme/basic/react-paginate.css';
import { Container } from '../components/SwButtons/SwButtons.styled';
import { getTrendingMovies } from 'servises';
// SwButtons;
import { MoviesList, Hero, Loader } from 'components';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchPage = searchParams.get('page') ?? 1;

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrandMovies = async () => {
      if (searchPage >= 1) {
        try {
          setIsLoading(true);
          const { results, total_pages } = await getTrendingMovies(searchPage);
          setTotalPages(total_pages);
          setMovies(results);
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
    setSearchParams({ page: event.selected + 1 });
  };

  return (
    <Container style={{ paddingBottom: '20px' }}>
      <Hero />
      <MoviesList movies={movies} path={'movies/'} />
      {/* <SwButtons onClickSwichBtn={handlePageToggle} page={searchPage} /> */}
      {isLoading && <Loader />}
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
    </Container>
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
