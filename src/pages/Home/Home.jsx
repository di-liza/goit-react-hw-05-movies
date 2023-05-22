import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'servises';
import { MovieList } from 'components';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies(1);
        setMovies(results);
        // console.log(results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getTrandMovies();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <MovieList movies={movies} />
    </main>
  );
}

export default Home;
