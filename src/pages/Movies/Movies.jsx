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
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>
                <h4>{original_title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Movies;
