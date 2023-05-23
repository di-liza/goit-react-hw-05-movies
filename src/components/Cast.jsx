import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises';
import { Outlet } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    getMovieCast(movieId).then(movies => {
      // console.log(movies);
      setMovies(movies);
    });
  }, [movieId]);

  return (
    <main>
      {movies && (
        <ul>
          {movies.cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
                <p>{actor.name}</p>
                {actor.character === '' ? (
                  <p>Character is not defined</p>
                ) : (
                  <p>Character: {actor.character}</p>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </main>
  );
}

export default Cast;
