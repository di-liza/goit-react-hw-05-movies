import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises';
import { MoviesList } from 'components';
// import { useLocation } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const { results } = await getTrendingMovies(1);
        setMovies(results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getTrandMovies();
  }, []);
  // const location = useLocation();
  // console.log('location:', location);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
}

export default Home;
