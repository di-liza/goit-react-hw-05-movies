import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieCast } from 'servises';

import { CastStyled } from './Cast.styled';
import placeholder from 'images/actor-photo-placeholder.jpg';

function Cast() {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const movie = await getMovieCast(movieId);
        setMovies(movie);
      } catch (error) {
        setError(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastStyled>
      {error && (
        <p style={{ margin: '100px auto', width: '320px' }}>
          Something went wrong, try again. <span>{error}</span>
        </p>
      )}
      {movie && (
        <ul className="list">
          {movie.cast.length > 0
            ? movie.cast.map(({ profile_path, id, name, character }) => {
                const actorPhoto = profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeholder;
                return (
                  <li className="item" key={id}>
                    <img
                      className="photo"
                      height="200"
                      width="150"
                      src={actorPhoto}
                      alt={name}
                    />

                    <p className="name">{name}</p>
                    {character === '' ? (
                      <p className="character">Character is not defined</p>
                    ) : (
                      <p className="character">Character: {character}</p>
                    )}
                  </li>
                );
              })
            : 'Information on the caste of the film is missing.'}
        </ul>
      )}
      <Outlet />
    </CastStyled>
  );
}

export default Cast;
