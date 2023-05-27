import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieCast } from 'servises';

import { MovieListStyled } from './Cast.styled';

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
    <main>
      {movie && (
        <MovieListStyled>
          {movie.cast.map(({ profile_path, id, name, character }) => {
            const actorPhoto = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';
            return (
              <li className="styled-movie-item" key={id}>
                <img className="movieCard__img" src={actorPhoto} alt={name} />
                <div className="movieCard__title">
                  <p className="movieCard__title-name">{name}</p>
                  {character === '' ? (
                    <p className="movieCard__title-character">
                      Character is not defined
                    </p>
                  ) : (
                    <p className="movieCard__title-character">
                      Character: <span>{character}</span>
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </MovieListStyled>
      )}
      <Outlet />
    </main>
  );
}

export default Cast;
