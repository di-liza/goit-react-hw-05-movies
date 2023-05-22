import React, { useState, useEffect } from 'react';
import fetchTrendingMovies from '../../servises/trandMovies';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies(1);
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getTrandMovies(1);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <a href="/assets">{movie.original_title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
