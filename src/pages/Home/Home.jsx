import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from 'servises';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const { results } = await getTrendingMovies(1);
        setMovies(results);
        // console.log(results);
      } catch (error) {
        console.log('error:', error);
      }
    };
    getTrandMovies();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {movies.map(({ id, original_title, poster_path }) => {
          const poster = poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  className="movieCard__img"
                  src={poster}
                  alt={original_title}
                />
                <h4>{original_title}</h4>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Home;
