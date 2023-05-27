import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieCast } from 'servises';

import { CastStyled } from './Cast.styled';

function Cast() {
  const { movieId } = useParams();
  const [movie, setMovies] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const movie = await getMovieCast(movieId);
        setMovies(movie);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastStyled>
      {movie && (
        <ul className="list">
          {movie.cast.length > 0
            ? movie.cast.map(({ profile_path, id, name, character }) => {
                const actorPhoto = profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';
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
