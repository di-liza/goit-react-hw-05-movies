import React, { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { StyledMovieItem } from './MovieItem.styled';
import { Loader } from 'components';

function MovieItem({ movie: { id, title, poster_path }, location }) {
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvkdU-3EFnpFevKRp3gvL-FWiuKKqoec8mxUltwbXZkZn60uvRyVHfLB9Iermy1kZIxY&usqp=CAU';

  return (
    <StyledMovieItem>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img className="movieCard__img" src={poster} alt={title} />
        <h2 className="movieCard__title">{title}</h2>
      </Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </StyledMovieItem>
  );
}

export default MovieItem;
