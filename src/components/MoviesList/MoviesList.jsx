import React, { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieListStyled } from './MoviesList.styled';
import { Loader } from 'components';
import placeholder from 'images/no-poster-placeholder.webp';

function MoviesList({ movies, path = '' }) {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => {
        const poster = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : placeholder;

        return (
          <li key={movie.id} className="item">
            <Link to={`${path}${movie.id}`} state={{ from: location }}>
              <img className="movieCard__img" src={poster} alt={movie.title} />
              <h2 className="movieCard__title">{movie.title}</h2>
            </Link>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </li>
        );
      })}
    </MovieListStyled>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  path: PropTypes.string,

  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }).isRequired
  ),
};
