import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'servises';
import { Link } from 'react-router-dom';

function Movies() {
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
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>
                <h4>{movie.original_title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Movies;
