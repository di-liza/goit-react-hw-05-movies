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
          {movies.cast.map(({ profile_path, id, name, character }) => {
            const actorPhoto = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';
            return (
              <li key={id}>
                <img src={actorPhoto} alt={name} />
                <p>{name}</p>
                {character === '' ? (
                  <p>Character is not defined</p>
                ) : (
                  <p>Character: {character}</p>
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
