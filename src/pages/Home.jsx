import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises';
import { MoviesList, Hero, SwButtons, Loader } from 'components';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrandMovies = async () => {
      if (page >= 1) {
        try {
          setIsLoading(true);
          const { results } = await getTrendingMovies(page);
          setMovies(results);
        } catch (error) {
          console.log('error:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getTrandMovies();
  }, [page]);

  const handlePageToggle = action => {
    setPage(prev => {
      if (prev === 1 && action === 'prev') return setPage(1);
      return action === 'prev' ? prev - 1 : prev + 1;
    });
  };

  return (
    <div style={{ paddingBottom: '20px' }}>
      <Hero />
      <MoviesList movies={movies} path={'movies/'} />
      <SwButtons onClickSwichBtn={handlePageToggle} page={page} />
      {isLoading && <Loader />}
    </div>
  );
}

export default Home;
