import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises';
import { MoviesList, Hero, SwButtons } from 'components';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTrandMovies = async () => {
      if (page >= 1) {
        try {
          const { results } = await getTrendingMovies(page);
          setMovies(results);
        } catch (error) {
          console.log('error:', error);
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
    </div>
  );
}

export default Home;
