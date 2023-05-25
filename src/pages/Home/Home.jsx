import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises';
import { MoviesList } from 'components';

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

  return (
    <>
      <h1>Home</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export default Home;
